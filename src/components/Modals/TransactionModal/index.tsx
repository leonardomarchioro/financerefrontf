import { ITrasaction } from "../../../interfaces";
import {
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanObjTransaction } from "../../../store/modules/transaction/actions";
import Modal from "../ModalContainer";

const TransactionModal: React.FC = () => {
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const transaction = useSelector(
    (state: { transactionValue: ITrasaction }) => state.transactionValue
  );

  const close = () => {
    setIsOpen(false);
    return new Promise(() => {
      setTimeout(() => dispatch(cleanObjTransaction()), 800);
    });
  };

  const confirmAction = () => {
    setConfirmation(false);
    dispatch(cleanObjTransaction());
    console.log("DELETE");
  };

  useEffect(() => {
    !!transaction.id && setIsOpen(true);
  }, [transaction.id]);

  return (
    <>
      <ModalConfirmation
        confirmation={confirmation}
        setConfirmation={setConfirmation}
        confirmAction={confirmAction}
      />
      <Modal
        close={close}
        show={!!transaction.id}
        height="70%"
        isOpenAnimate={isOpen}
      >
        <ModalContent type={transaction.type}>
          <>
            <TopModal>
              <TopModalStep1>
                <h1>{transaction.title}</h1>
                <span>
                  Data: {moment(transaction.date).format("DD/MM/YYYY")}
                </span>
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
      </Modal>
    </>
  );
};

export default TransactionModal;
