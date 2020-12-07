import React, { useState } from 'react';

import TextInput from '../../components/UI/Form/TextInput';

const AddSurvey = (props) => {
  const [surveyForm, setSurveyForm] = useState({
    title: {
      value: '',
      require: true,
      atributes: {
        type: 'text',
        name: 'title',
        placeholder: 'Title*',
      },
    },
    body: {
      value: '',
      require: true,
      atributes: {
        type: 'text',
        name: 'body',
        placeholder: 'Body*',
      },
    },
    subject: {
      value: '',
      require: true,
      atributes: {
        type: 'text',
        name: 'subject',
        placeholder: 'Subject*',
      },
    },
    recipients: {
      value: '',
      require: true,
      atributes: {
        type: 'text',
        name: 'recipients',
        placeholder: 'Recipients emails separated by comma*',
      },
    },
  });

  const onInputChange = (name, e) => {
    console.log(name);
    const updatedState = {
      ...surveyForm,
      [name]: {
        ...surveyForm[name],
        value: e.target.value,
      },
    };
    setSurveyForm(updatedState);
  };

  const formInputs = Object.keys(surveyForm).map((formField) => {
    const options = surveyForm[formField];
    return (
      <TextInput
        key={options.atributes.name}
        value={options.value}
        required={options.required}
        {...options.atributes}
        onChange={(e) => onInputChange(options.atributes.name, e)}
      />
    );
  });

  return <form>{formInputs}</form>;
};

export default AddSurvey;
