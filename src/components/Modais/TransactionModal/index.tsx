import { ITrasaction } from "../../../interfaces";
import {
  ContainerModal,
  Modal,
  ModalDescription,
  TitleDescription,
  TopModal,
  TopModalStep1,
  TopModalStep2,
} from "./styles";
import { IoClose } from "react-icons/io5";
import { FiTrash, FiEdit3 } from "react-icons/fi";

import moment from "moment";

import { useState } from "react";
import ModalConfirmation from "../ModalConfirmation";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  transaction: ITrasaction;
}

interface IEventTarget extends React.MouseEvent<HTMLElement> {
  tagName: string;
}

const TransactionModal: React.FC<IProps> = ({ transaction, setModal }) => {
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    const tag = (e.target as unknown as IEventTarget).tagName;
    tag === "SECTION" && setModal(false);
  };

  return (
    <>
      {confirmation && (
        <ModalConfirmation
          setConfirmation={setConfirmation}
          setModal={setModal}
        />
      )}
      <ContainerModal onClick={(e) => closeModal(e)}>
        <Modal className={transaction.type}>
          <TopModal>
            <TopModalStep1>
              <h1>{transaction.title}</h1>
              <span>Data: {moment(transaction.date).format("DD/MM/YYYY")}</span>
              <span>Valor: ${transaction.value.toFixed(2)}</span>
              <span>{transaction.category}</span>
            </TopModalStep1>
            <TopModalStep2>
              <IoClose size={25} onClick={() => setModal(false)} />
              <FiEdit3 size={25} />
              <FiTrash size={25} onClick={() => setConfirmation(true)} />
            </TopModalStep2>
          </TopModal>
          <TitleDescription>Descrição</TitleDescription>
          <ModalDescription>
            <p>{transaction.description}</p>
          </ModalDescription>
        </Modal>
      </ContainerModal>
    </>
  );
};

export default TransactionModal;
