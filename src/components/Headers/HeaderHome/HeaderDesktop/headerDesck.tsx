import Link from "next/link";
import { HeaderDeskContainer, Header } from "./style";

import ThemeSelect from "../../../ThemeSelect";

const HeaderDesck: React.FC = () => (
  <HeaderDeskContainer>
    <ThemeSelect />
    <Header>
      <Link href="/about">Sobre</Link>
      <Link href="/signin">Login</Link>
      <Link href="/signup">Registro</Link>
    </Header>
  </HeaderDeskContainer>
);

export default HeaderDesck;
