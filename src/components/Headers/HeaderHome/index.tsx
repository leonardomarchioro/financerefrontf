import HeaderDesck from "./HeaderDesktop/headerDesck";
import HeaderMobile from "./HeaderMobile/headerMobile";

import { Header } from "./styles";

const HeaderHome: React.FC = () => {
  return (
    <Header>
      <HeaderDesck />
      <HeaderMobile />
    </Header>
  );
};
export default HeaderHome;
