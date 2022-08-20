import { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => setConfirmation(false), 800);
  };

  useEffect(() => {
    confirmation && setIsOpen(true);
  }, [confirmation]);

  const confirm = () => {
    setIsOpen(false);
    setTimeout(() => confirmAction(), 800);
  };

  return (
    <Modal
      close={close}
      show={confirmation}
      height="15rem"
      width="18rem"
      isOpenAnimate={isOpen}
    >
      <ModalContent>
        <>
          <h1>Você deseja mesmo excluir está transação?</h1>
          <ButtonsContainer>
            <Button className="cancel" onClick={close}>
              Cancelar
            </Button>
            <Button className="confirm" onClick={confirm}>
              Confirmar
            </Button>
          </ButtonsContainer>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirmation;
