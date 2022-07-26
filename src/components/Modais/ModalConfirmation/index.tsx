import { RenderModalBackdropProps } from "react-overlays/cjs/Modal";
import Button from "../../Buttons/GeneralButton";
import { ButtonsContainer, ContainerModal, ModalContent } from "./styles";

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
  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <ContainerModal {...props} />
  );

  return (
    <ModalContent
      onHide={() => setConfirmation(false)}
      show={confirmation}
      renderBackdrop={renderBackdrop}
    >
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
  );
};

export default ModalConfirmation;
