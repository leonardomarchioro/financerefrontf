import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { HeaderMobileContainer, HeaderNone, Header } from "./styles";
import ThemeSelect from "../../../ThemeSelect";

const HeaderMobile: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const heandleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderMobileContainer>
      {menu ? (
        <Header>
          <Link href="/about">About</Link>
          <Link href="/signin">Singin</Link>
          <Link href="/signup">SignUp</Link>
          <IoClose size="30px" onClick={heandleMenu} />
        </Header>
      ) : (
        <HeaderNone>
          <ThemeSelect />
          <GiHamburgerMenu size="30px" onClick={heandleMenu} />
        </HeaderNone>
      )}
    </HeaderMobileContainer>
  );
};

export default HeaderMobile;
