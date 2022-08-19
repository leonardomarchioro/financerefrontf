import { GiHamburgerMenu } from "react-icons/gi";
import { Header, MenuContainer, Titles } from "./styles";

interface IState {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

import { useState } from "react";

const HeaderDash: React.FC<IState> = ({ setShowMenu }) => {
  return (
    <Header>
      <Titles>
        <h1>Finance Plataform</h1>
        <h3>Bem-vindo USER!</h3>
      </Titles>
      <MenuContainer>
        <span>Saldo total: $1.000.000,00</span>
        <GiHamburgerMenu size={40} onClick={() => setShowMenu(true)} />
      </MenuContainer>
    </Header>
  );
};

export default HeaderDash;
