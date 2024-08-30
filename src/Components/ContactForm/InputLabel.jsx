import React, { useState } from 'react';

const InputWithLabel = ({ label, value, onChange, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === '') setIsFocused(false);
  };

  return (
    <div className={`input-container ${isFocused ? 'focused' : ''}`}>
      <label className={`input-label ${isFocused || value ? 'active' : ''}`}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        name={name}  // Pass the name prop to the input element
      />
    </div>
  );
};

export default InputWithLabel;
