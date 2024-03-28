import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
 
    align-items: center;
 
  
   justify-content: center;
   margin-bottom: 20px;


`;

export const ContainerListFeed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:516px;
  flex-direction: column;
  
`
export const CardFeed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:516px;
  background-color: ${(props) => props.theme.colors.grayiscontainer};
 
  
`
export const ContainerFeed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:516px;
  background-color: ${(props) => props.theme.colors.grayiscontainer};

  
`

export const ContainerHeader = styled.div`
display:flex;
flex-direction:row;
justify-content: flex-end;
background-color: ${(props) => props.theme.colors.grayiscontainer};
cursor: pointer;
width:100%;
 & > img{
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
 }`;
 
export const CardRodape = styled.div`
display:flex;
flex-direction:row;
 justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.grayiscontainer};
 width:100%;
 
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:88px;

  padding:10px;
  
`

export const ImageFeed = styled.img`

  width: 88px;
  height: 88px;
  border-radius: 10px;
  
`

export const ContainerTexto = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex:1;
  flex-direction: column;


  
`

