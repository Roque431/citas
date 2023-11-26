import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: #1ad6d0;
  color: #1d1818;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #9fc9bf;
  }

`;
const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
