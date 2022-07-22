import { IoClose } from "react-icons/io5";
import { MdLogout, MdOutlineCalculate } from "react-icons/md";
import { BsBoxArrowUpRight, BsBoxArrowInDownRight } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import ThemeSelect from "../ThemeSelect";
import React from "react";
import {
  ActionButton,
  BottonMenu,
  Container,
  MiddleMenu,
  TopMenu,
} from "./styles";

interface IState {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideMenu: React.FC<IState> = ({ setShowMenu }) => {
  const handle = () => {
    setShowMenu(false);
  };

  return (
    <Container>
      <TopMenu>
        <ThemeSelect />
        <IoClose onClick={handle} size={35} />
      </TopMenu>
      <MiddleMenu>
        <ActionButton>
          <span>Nova Entrada</span>
          <BsBoxArrowUpRight size={30} />
        </ActionButton>
        <ActionButton>
          <span>Nova Saída</span>
          <BsBoxArrowInDownRight size={30} />
        </ActionButton>
        <ActionButton>
          <span>Calculadora</span>
          <MdOutlineCalculate size={30} />
        </ActionButton>
        <ActionButton>
          <span>Gráficos</span>
          <VscGraph size={30} />
        </ActionButton>
        <ActionButton>
          <span>Filtrar</span>
          <HiOutlineFilter size={30} />
        </ActionButton>
      </MiddleMenu>
      <BottonMenu>
        <span>Sair</span>
        <MdLogout size={35} />
      </BottonMenu>
    </Container>
  );
};

export default AsideMenu;
