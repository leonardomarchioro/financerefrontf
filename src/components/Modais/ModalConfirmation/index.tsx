import Button from "../../Buttons/GeneralButton";
import { ButtonsContainer, ContainerModal, Modal } from "./styles";

interface IState {
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalConfirmation: React.FC<IState> = ({ setConfirmation, setModal }) => {
  const confirmDelete = () => {
    console.log("DELETE");
    setConfirmation(false);
    setModal(false);
  };

  return (
    <ContainerModal>
      <Modal>
        <h1>Você deseja mesmo excluir está transação?</h1>
        <ButtonsContainer>
          <Button className="cancel" onClick={() => setConfirmation(false)}>
            Cancelar
          </Button>
          <Button className="confirm" onClick={confirmDelete}>
            Confirmar
          </Button>
        </ButtonsContainer>
      </Modal>
    </ContainerModal>
  );
};

export default ModalConfirmation;
