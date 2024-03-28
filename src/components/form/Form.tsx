import React, { useRef, useState } from 'react';
import { CardImage, ContaienerTrash, Container, ContainerButton, ContainerCardFile, ContainerForm, ContainerInput, InputFile, StyledButton, StyledInput } from './styled';
import imageFile from '../../assets/image.png';
import trashImage from '../../assets/trash.png';
import { FormField } from '../../interface/FormFild';
import { v4 as uuidv4 } from 'uuid';
import { getMessage } from '../../helper/geminiAi';
// Interface para representar os diferentes tipos de campos do formulário
interface ListFeedProps{
  addToFormField:(formfield:FormField) => void;
}

function Form({addToFormField}:ListFeedProps) {
   const [formFields, setFormFields] = useState<FormField>({
     text: '',
     textarea: '',
     file: null,
     id:'',
   });

   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const selectedFile = e.target.files?.[0];
     if (selectedFile) {
       setFormFields({ ...formFields, file: selectedFile });
     }
   };
 
   const openFileInput = () => {
     if (fileInputRef.current) {
       fileInputRef.current.click();
     }
   };

   const clearImage = () => {
      setFormFields({ ...formFields, file: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value } = e.target;
     setFormFields({ ...formFields, [name]: value });
   };

   const handlePublish = async () => {
     // Salvar os dados do formulário ou fazer qualquer outra operação necessária
     console.log('Dados do formulário salvos:', formFields);
     const FormFiledsWithId = {
      ...formFields,
      textarea:await getMessage('Traduça para o inglês e traga somente o texto',formFields.textarea),
      id: uuidv4()
     }
     addToFormField(FormFiledsWithId)
     clearImage()
     setFormFields({
      text: '',
      textarea: '',
      file: null,
      id:''})
   };

   const handleDiscard = () => {
     // Limpar os campos do formulário
     setFormFields({ text: '', textarea: '', file: null,id:'' });
   };

  return (
   <Container>
      <ContainerForm>

      <InputFile
        type="file"
        id="fileInput"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <ContainerCardFile>
         <CardImage className={formFields.file ? 'fullImage' : ''} onClick={openFileInput}>
         <img src={formFields.file ? URL.createObjectURL(formFields.file) : imageFile} alt="imageFile" />
         </CardImage>
         <ContaienerTrash onClick={clearImage}>
         <img src={trashImage} alt="trash" />
         </ContaienerTrash>
      </ContainerCardFile>
      
      <ContainerInput>
          <div>
            <StyledInput type={'input'} name="text" value={formFields.text} onChange={handleInputChange} />
          </div>

          <div>
            <StyledInput type={'textarea'} name="textarea" value={formFields.textarea} onChange={handleInputChange} />
          </div>
      </ContainerInput>

      <ContainerButton>
         <StyledButton type="delete" onClick={handleDiscard}>Descartar</StyledButton>
         <StyledButton type="included" onClick={handlePublish}>Publicar</StyledButton>
      </ContainerButton>

      </ContainerForm>
    </Container>

  );
}

export default Form;
