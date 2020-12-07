import React, { useState } from 'react';

import TextInput from '../../components/UI/Form/TextInput';

const AddSurvey = (props) => {
  const [surveyForm, setSurveyForm] = useState({
    title: {
      value: '',
      atributes: {
        type: 'text',
        name: 'title',
        label: 'Title',
      },
      validation: {
        valid: false,
        touched: false,
        rules: {
          minLength: 5,
          errorMessage: '',
        },
      },
    },

    subject: {
      value: '',
      require: true,
      atributes: {
        type: 'text',
        name: 'subject',
        label: 'Subject',
      },
      validation: {
        valid: false,
        touched: false,
        rules: { minLength: 5 },
        errorMessage: '',
      },
    },
    recipients: {
      value: '',
      require: true,
      atributes: {
        type: 'text',
        name: 'recipients',
        label: 'Recipients',
      },
      validation: {
        valid: false,
        touched: false,
        rules: { minLength: 5 },
        errorMessage: '',
      },
    },
    body: {
      value: '',
      require: true,
      atributes: {
        type: 'textarea',
        name: 'body',
        label: 'Body',
      },
      validation: {
        valid: false,
        touched: false,
        rules: { minLength: 10 },
        errorMessage: '',
      },
    },
  });

  const [isFormValid, setFormValidity] = useState(false);

  const onInputChange = (name, e) => {
    const value = e.target.value;
    const rules = surveyForm[name].validation.rules;

    const { isValid, errorMessage } = validateInput(value, rules);

    const updatedSurveyForm = {
      ...surveyForm,
      [name]: {
        ...surveyForm[name],
        value: value,
        validation: {
          ...surveyForm[name].validation,
          valid: isValid,
          errorMessage,
          touched: true,
        },
      },
    };
    setSurveyForm(updatedSurveyForm);

    const isFormValid = validateForm(updatedSurveyForm);
    setFormValidity(isFormValid);
  };

  const onSubmitSurvey = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  const validFormField = (field) => {
    return surveyForm[field].validation.touched
      ? surveyForm[field].validation.valid
      : true;
  };

  const validateInput = (value, rules) => {
    let isValid = false;
    let errorMessage = '';

    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
      errorMessage = `must be at least ${rules.minLength} symbols or more`;
      return {
        isValid,
        errorMessage,
      };
    }

    return {
      isValid,
      errorMessage,
    };
  };

  const validateForm = (formFields) => {
    let isValid = true;

    for (let key in formFields) {
      const field = formFields[key];
      isValid = isValid && field.validation.valid;
    }

    return isValid;
  };

  const formInputs = Object.keys(surveyForm).map((formField) => {
    const options = surveyForm[formField];
    const { value, required, atributes } = options;
    const { touched, errorMessage } = options.validation;
    const { name } = options.atributes;

    return (
      <TextInput
        key={name}
        value={value}
        required={required}
        {...atributes}
        valid={validFormField(name)}
        touched={touched}
        onChange={(e) => onInputChange(name, e)}
        errorMessage={errorMessage}
      />
    );
  });

  return (
    <form onSubmit={onSubmitSurvey}>
      {formInputs}
      <button
        disabled={!isFormValid}
        className="waves-effect waves-light btn"
        onClick={onSubmitSurvey}
      >
        Submit Survey
      </button>
    </form>
  );
};

export default AddSurvey;
