import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.black}; /* Define a cor de fundo para toda a aplicação */
  }
`;

export const ContainerPage = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 40px;
`