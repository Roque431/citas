import React from "react";
import styled from "styled-components";

const TituloStyled = styled.div`
  text-align: center;
  color: #4caf50;
`;

export default function Titulo({ titulos }) {
  return (
    <TituloStyled>
      <h1>{titulos.titulo}</h1>
    </TituloStyled>
  );
}
