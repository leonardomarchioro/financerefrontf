import { ITrasaction } from "../../../interfaces";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modules/modalManagement/actions";

import React from "react";
import { ModalContent } from "./styles";
import Modal from "../ModalContainer";

interface ITypemodalManagement {
  modalManagement: { type: string };
}

const EditTransactionModal: React.FC = () => {
  const dispatch = useDispatch();

  const modalManagement = useSelector(
    (state: ITypemodalManagement) => state.modalManagement
  );

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <Modal show={!!modalManagement.type} close={close}>
      <ModalContent className={modalManagement.type}>
        <div>
          <h1>TESTE</h1>
          <button onClick={close}>Fechar</button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default EditTransactionModal;
