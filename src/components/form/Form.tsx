import React, { useRef, useState } from 'react';
import { CardImage, ContaienerTrash, ContainerButton, ContainerCardFile, ContainerForm, ContainerInput, InputFile, StyledButton, StyledInput } from './styled';
import imageFile from '../../assets/image.png';
import trashImage from '../../assets/trash.png';

function Form() {
   const [file, setFile] = useState<File | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null); // Criando a ref para o input file
 
   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const selectedFile = e.target.files?.[0];
     if (selectedFile) {
       setFile(selectedFile);
     }
   };
 
   const openFileInput = () => {
     if (fileInputRef.current) {
       fileInputRef.current.click(); // Acionando o clique no input file usando a ref
     }
   };

   const clearImage = () => {
      setFile(null); //Limpa a imagem
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // limpa o ref
      }
    };
 

  return (
    <ContainerForm>

      <InputFile
        type="file"
        id="fileInput"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <ContainerCardFile>
         <CardImage className={file ? 'fullImage' : ''} onClick={openFileInput}>
         <img src={file ? URL.createObjectURL(file) : imageFile} alt="imageFile" />
         </CardImage>
         <ContaienerTrash onClick={clearImage}>
         <img src={trashImage} alt="trash" />
         </ContaienerTrash>
      </ContainerCardFile>
      
      <ContainerInput>
          <div>
            <StyledInput type={'input'}  />
          </div>

          <div>
            <StyledInput type={'textarea'} />
          </div>
      </ContainerInput>

      <ContainerButton>
         <StyledButton type="delete">Descartar</StyledButton>
         <StyledButton type="included">Publicar</StyledButton>
      </ContainerButton>

      
      </ContainerForm>
  );
}

export default Form;
