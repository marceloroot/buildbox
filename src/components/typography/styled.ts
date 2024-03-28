import styled from 'styled-components';

export const TextStyle2 = styled.h1`
font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`;

export const TextStyle3 = styled.h1`
  font-family: 'Roboto Medium', sans-serif; /* Fallback para sans-serif caso Roboto Medium não esteja disponível */
  font-size: 24px;
  font-weight: 500; /* Utilize 500 para a variante Medium */
  line-height: 1.5;
  letter-spacing: 0.5px;
`;

export const TextFeed = styled.h1`
font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color:  ${(props) => props.theme.colors.warmgreytwo};
  
  flex:1
`;

export const TextStyleSmal = styled.h1`
font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #9f9f9f;
  padding: 0;
  margin: 0;
`;
