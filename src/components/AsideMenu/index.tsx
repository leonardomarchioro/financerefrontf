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

import { useDispatch } from "react-redux";
import {
  entranceModal,
  exitModal,
} from "../../store/modules/transactionModal/actions";

interface IState {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const AsideMenu: React.FC<IState> = ({ setShowMenu }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <TopMenu>
          <ThemeSelect />
          <IoClose onClick={() => setShowMenu(false)} size={35} />
        </TopMenu>
        <MiddleMenu>
          <ActionButton
            onClick={() => {
              dispatch(entranceModal());
              setShowMenu(false);
            }}
          >
            <span>Nova Entrada</span>
            <BsBoxArrowUpRight size={30} />
          </ActionButton>
          <ActionButton
            onClick={() => {
              dispatch(exitModal());
              setShowMenu(false);
            }}
          >
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
    </>
  );
};

export default AsideMenu;
