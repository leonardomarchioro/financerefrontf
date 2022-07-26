import { ITrasaction } from "../../../interfaces";
// import { Modal } from "./styles";

import { Modal } from "react-overlays";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modules/modalManagement/actions";
import { ContainerModal } from "./styles";
import React from "react";
import { RenderModalBackdropProps } from "react-overlays/cjs/Modal";

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

  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <ContainerModal {...props} />
  );

  return (
    <Modal
      className={modalManagement.type}
      show={!!modalManagement.type}
      onHide={close}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <h1>TESTE</h1>
        <button onClick={close}>Fechar</button>
      </div>
    </Modal>
  );
};

export default EditTransactionModal;
