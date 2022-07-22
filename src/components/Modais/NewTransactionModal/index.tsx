import { ITrasaction } from "../../../interfaces";
import { ContainerModal, Modal } from "./styles";

const NewTransactionModal: React.FC<ITrasaction> = (transaction) => {
  return (
    <ContainerModal>
      <Modal>NewTransaction</Modal>
    </ContainerModal>
  );
};

export default NewTransactionModal;
