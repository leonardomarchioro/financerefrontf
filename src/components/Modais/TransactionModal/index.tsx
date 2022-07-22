import { ITrasaction } from "../../../interfaces";
import { ContainerModal, Modal } from "./styles";
import { IoClose } from "react-icons/io5";
import { string } from "yup/lib/locale";

interface IProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  transaction: ITrasaction;
}

interface IEventTarget extends React.MouseEvent<HTMLElement> {
  tagName: string;
}

const TransactionModal: React.FC<IProps> = ({ transaction, setModal }) => {
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    const tag = (e.target as unknown as IEventTarget).tagName;
    tag === "SECTION" && setModal(false);
  };

  return (
    <ContainerModal onClick={(e) => closeModal(e)}>
      <Modal className={transaction.type}>
        <IoClose size={25} onClick={() => setModal(false)} />
        <h1>{transaction.title}</h1>
      </Modal>
    </ContainerModal>
  );
};

export default TransactionModal;
