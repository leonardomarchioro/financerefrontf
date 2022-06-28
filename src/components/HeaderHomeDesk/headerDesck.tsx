import Link from "next/link";
import { HeaderDeskContainer } from "./style";


const HeaderDesck: React.FC = () => (
   <HeaderDeskContainer>
      <header>
        <Link href="/about">
           About
        </Link>
        <Link href="/singin">
           Singin
        </Link>
        <Link href="/sigup">
            SignUp
        </Link>
      </header>
   </HeaderDeskContainer>

  );
  
  export default HeaderDesck;