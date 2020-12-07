import React from 'react';

const TextInput = ({ value, required, type, name, placeholder, onChange }) => {
  let inputElement = null;

  switch (type) {
    case 'text':
      inputElement = (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          required={required}
          name={name}
          onChange={onChange}
        />
      );
      break;

    default:
      inputElement = (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          required={required}
          name={name}
          onChange={onChange}
        />
      );
      break;
  }

  return inputElement;
};

export default TextInput;
