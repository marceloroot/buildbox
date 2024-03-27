import { ContainerHeader } from "./styled";
import logoImg from '../../assets/bx-logo.png'
function Header() {
    return ( 
        <ContainerHeader>
            <img src={logoImg} alt="" />
        </ContainerHeader>
     );
}

export default Header;