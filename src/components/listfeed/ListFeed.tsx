import { TextFeed, TextStyle2, TextStyleSmal } from "../typography/styled";
import { CardFeed, CardRodape, Container, ContainerFeed, ContainerHeader, ContainerImage, ContainerListFeed, ContainerTexto, ImageFeed } from "./styled";
import imageFile from '../../assets/bx-logo.png';
import imageDelete from '../../assets/delete.png';
import { FormField } from "../../interface/FormFild";
interface ListFeedProps{
  field:FormField;
  deleteFormField:(id:string) => void;
}

function ListFeed ({field,deleteFormField}:ListFeedProps) {
  console.log(JSON.stringify(field,null,2));
  const halndleDelte = (id:string) =>{
    deleteFormField(id);
  }
    return ( 
        <Container>
            <ContainerListFeed>
            
              
              <ContainerHeader onClick={() => halndleDelte(field.id)}>
                
                  <img src={imageDelete} alt="imgDelete" />
                
                </ContainerHeader>
              <CardFeed>
                
                <ContainerImage>
                    <ImageFeed src={field.file ? URL.createObjectURL(field.file) : imageFile} alt="avatar" />
                </ContainerImage>
                <ContainerTexto>
                    <TextStyle2>
                    {field.textarea}
                    </TextStyle2>
                    <TextStyleSmal>
                    Enviado por:
                  </TextStyleSmal>
                  <TextStyleSmal>
                  {field.text}
                  </TextStyleSmal>
                  
                </ContainerTexto>
                
                </CardFeed>
            
                
            </ContainerListFeed>
        </Container>
     );
}

export default ListFeed;