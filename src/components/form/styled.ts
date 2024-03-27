import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
 
   
    width: 516px;
  
    background-color: ${(props) => props.theme.colors.grayiscontainer};
    border:1px solid ${(props) => props.theme.colors.greyishbrowntwo};
    margin-bottom: 10px;
`;

export const InputFile = styled.input`
   display: none;
`;

export const ContainerCardFile = styled.div`
  display: flex;

  justify-content: center;

`
export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;
  margin-top: 16px;
  border-radius: 36px;
  border: solid 1px ${(props) => props.theme.colors.greyishbrowntwo};
  background-color: ${(props) => props.theme.colors.greyishbrownthree0};
  overflow: hidden; 

  &.fullImage {
    width: 88px; 
    height: 88px; 

    img {
      width: 88px; 
      height: 88px; 
      object-fit: cover; 
    }
  }

  img {
    width: 24px; 
    height: 24px; 
    object-fit: contain; 
  }
`;

export const ContaienerTrash = styled.div`

 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: 16px;
 margin-top: 16px;
 height: 88px;
 & > img{
  width: 24px;
 height: 24px;


 }

`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center; 
 

  & > div{

  background-color: ${(props) => props.theme.colors.greyishbrown};
  width: 468px;
  border-radius: 8px;
  margin-top: ${(props) => props.theme.spacing.x};
  white-space: pre-wrap;
}
`;

interface InputProps {
  type: 'textarea' | 'input'; 
}

export const StyledInput = styled.input<InputProps>`
  width: 468px;
  padding: ${(props) => props.theme.spacing.x};
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.white};

  /* Permite que o texto quebre em várias linhas */
  white-space: pre-wrap;

  ${(props) => props.type === 'textarea' && `
    height: 100px; 
    resize: none;
  `}
`;


export const ContainerButton = styled.div`
 display: flex;
 align-items: flex-end;
 justify-content: flex-end;
 padding: ${(props) => props.theme.spacing.x};
 gap: 10px;

`;
interface ButtomProps {
  type: 'delete' | 'included'; 
}
export const StyledButton = styled.button<ButtomProps>`
  padding: ${(props) => props.theme.spacing.m};

  font-family: 'Roboto', sans-serif;
 background-color: transparent;
 cursor: pointer;

 ${(props) => props.type === 'included' && `
    border: none;
    outline: none;
      background-color: ${props.theme.colors.darklimegreen};
      color: ${props.theme.colors.white};
      border-radius:${ props.theme.spacing.s};
  `}

  ${(props) => props.type === 'delete' && `
     background-color:trasparent;
      border: none;
      outline: none;
      color:  ${props.theme.colors.brownishgrey};
      text-decoration: underline;
  `}
`


   
