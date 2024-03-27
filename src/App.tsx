
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { ContainerPage, GlobalStyles } from './GlobalStyles';
import Header from './components/header/Header';
import Form from './components/form/Form';



function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
     <Header />
     <ContainerPage>
       <Form />
     </ContainerPage>
    </ThemeProvider>
  );
}

export default App;
