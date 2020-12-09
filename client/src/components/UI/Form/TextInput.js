import React from 'react';

const TextInput = ({
  value,
  required,
  type,
  name,
  label,
  onChange,
  valid,
  touched,
  errorMessage,
  active,
}) => {
  let inputElement = null;

  switch (type) {
    case 'text':
      inputElement = (
        <div className="row">
          <div className="input-field col s12">
            <input
              // No className added if field is not touched. Add after its touched
              className={touched ? (valid ? 'valid' : 'invalid') : ''}
              type="text"
              value={value}
              required={required}
              name={name}
              id={name}
              onChange={onChange}
            />
            <label htmlFor={name} className={active ? 'active' : 'teste'}>
              {label} {valid ? null : errorMessage}
            </label>
          </div>
        </div>
      );
      break;
    case 'textarea':
      const classes = ['materialize-textarea'];
      if (touched) {
        classes.push(valid ? 'valid' : 'invalid');
      }
      inputElement = (
        <div className="row">
          <div className="input-field col s12">
            <textarea
              className={classes.join(' ')}
              value={value}
              required={required}
              name={name}
              onChange={onChange}
            />
            <label htmlFor={name} className={active ? 'active' : 'teste'}>
              {label} {valid ? null : errorMessage}
            </label>
          </div>
        </div>
      );
      break;

    default:
      inputElement = null;
      break;
  }

  return inputElement;
};

export default TextInput;
