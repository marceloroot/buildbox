
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { CardFeed, ContainerPage, GlobalStyles, TextCardFeed } from './GlobalStyles';
import Header from './components/header/Header';
import Form from './components/form/Form';
import ListFeed from './components/listfeed/ListFeed';
import { TextFeed } from './components/typography/styled';
import { FormField } from './interface/FormFild';



function App() {
  const [feeds,setFeeds] = useState<FormField[]>([])

  const addFields = (formfield:FormField) => {
    console.log("talk",formfield)
    setFeeds([...feeds, formfield]);
}

const deleteField = (id: string) => {
  // Filtrar a lista para remover o item com o ID correspondente
  const updatedFields = feeds.filter(field => field.id !== id);
  setFeeds(updatedFields);
};
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
     <Header />
     <ContainerPage>
       <Form addToFormField={addFields}/>
       <CardFeed>
       <TextCardFeed>
        <TextFeed>Feed</TextFeed>
       </TextCardFeed>
       </CardFeed>
       {feeds.map((field:FormField) => (
        <ListFeed key={field.id} field={field} deleteFormField={deleteField}/>
       ))}
       
       
     </ContainerPage>
    </ThemeProvider>
  );
}

export default App;
