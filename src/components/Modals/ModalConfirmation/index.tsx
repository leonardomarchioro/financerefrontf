import Button from "../../Buttons/GeneralButton";
import Modal from "../ModalContainer";
import { ButtonsContainer, ModalContent } from "./styles";

interface IProps {
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  confirmAction: () => void;
  confirmation: boolean;
}

const ModalConfirmation: React.FC<IProps> = ({
  setConfirmation,
  confirmAction,
  confirmation,
}) => {
  return (
    <Modal
      close={() => setConfirmation(false)}
      show={confirmation}
      height="15rem"
      width="18rem"
    >
      <ModalContent>
        <>
          <h1>Você deseja mesmo excluir está transação?</h1>
          <ButtonsContainer>
            <Button className="cancel" onClick={() => setConfirmation(false)}>
              Cancelar
            </Button>
            <Button className="confirm" onClick={confirmAction}>
              Confirmar
            </Button>
          </ButtonsContainer>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirmation;
