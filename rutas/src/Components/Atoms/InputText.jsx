import React from 'react';
import styled from 'styled-components';

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const InputText = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #141212;
  border-radius: 4px;
`;

const CustomInputText = ({ label, value, onChange, type}) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <InputText type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default CustomInputText;

