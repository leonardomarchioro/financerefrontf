import { ITrasaction } from "../../../interfaces";
import { ContainerModal, Modal } from "./styles";

const EditTransactionModal: React.FC<ITrasaction> = (transaction) => {
  return (
    <ContainerModal>
      <Modal>EditTransaction</Modal>
    </ContainerModal>
  );
};

export default EditTransactionModal;
