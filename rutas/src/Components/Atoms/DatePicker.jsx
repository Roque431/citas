import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #1f1b1b;
  border-radius: 4px;
`;

const CustomDatePicker = ({ selected, onChange }) => {
  return <StyledDatePicker selected={selected} onChange={onChange} />;
  ;
};

export default CustomDatePicker;
