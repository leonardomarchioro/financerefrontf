import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { HeaderMobileContainer } from "./styles";

const HeaderMobile: React.FC = () => {
    const [menu, setMenu] = useState(false);

    const heandleMenu = () => {
      setMenu(!menu);
    };
  
    return(
        <HeaderMobileContainer>
        {menu ? (
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
        <IoClose size="30px" color="black" onClick={heandleMenu} />

      </header>
      ) :  <GiHamburgerMenu size="30px" color="black" onClick={heandleMenu} />
        }
        </HeaderMobileContainer>

  )};
  
  export default HeaderMobile;