import { RenderModalBackdropProps } from "react-overlays/cjs/Modal";
import { ITrasaction } from "../../../interfaces";

import {
  ContainerModal,
  ModalContent,
  ModalDescription,
  TitleDescription,
  TopModal,
  TopModalStep1,
  TopModalStep2,
} from "./styles";

import { IoClose } from "react-icons/io5";
import { FiTrash, FiEdit3 } from "react-icons/fi";
import ModalConfirmation from "../ModalConfirmation";

import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanObjTransaction } from "../../../store/modules/transaction/actions";

interface IProps {}

const TransactionModal: React.FC = () => {
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const dispatch = useDispatch();

  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <ContainerModal {...props} />
  );

  const transaction = useSelector(
    (state: { transactionValue: ITrasaction }) => state.transactionValue
  );

  const close = () => {
    dispatch(cleanObjTransaction());
  };

  const confirmAction = () => {
    setConfirmation(false);
    console.log("DELETE");
  };

  return (
    <>
      <ModalConfirmation
        confirmation={confirmation}
        setConfirmation={setConfirmation}
        confirmAction={confirmAction}
      />

      <ModalContent
        onHide={close}
        show={!!transaction.id}
        renderBackdrop={renderBackdrop}
      >
        <>
          <TopModal>
            <TopModalStep1>
              <h1>{transaction.title}</h1>
              <span>Data: {moment(transaction.date).format("DD/MM/YYYY")}</span>
              <span>
                Valor: ${!!transaction.id && transaction.value.toFixed(2)}
              </span>
              <span>{transaction.category}</span>
            </TopModalStep1>
            <TopModalStep2>
              <IoClose size={25} onClick={close} />
              <FiEdit3 size={25} />
              <FiTrash size={25} onClick={() => setConfirmation(true)} />
            </TopModalStep2>
          </TopModal>
          <TitleDescription>Descrição</TitleDescription>
          <ModalDescription>
            <p>{transaction.description}</p>
          </ModalDescription>
        </>
      </ModalContent>
    </>
  );
};

export default TransactionModal;
