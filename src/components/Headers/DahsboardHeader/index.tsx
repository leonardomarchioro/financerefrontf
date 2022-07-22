import { GiHamburgerMenu } from "react-icons/gi";
import { Header, MenuContainer, Titles } from "./styles";

interface IState {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDash: React.FC<IState> = ({ setShowMenu }) => {
  const handle = () => {
    setShowMenu(true);
  };

  return (
    <Header>
      <Titles>
        <h1>Finance Plataform</h1>
        <h3>Bem-vindo USER!</h3>
      </Titles>
      <MenuContainer>
        <span>Saldo total: $0,00</span>
        <GiHamburgerMenu size={40} onClick={handle} />
      </MenuContainer>
    </Header>
  );
};

export default HeaderDash;
