import GeneralInput from "../../Inputs/GeneralInput";
import TextArea from "../../Inputs/TextArea";
import Button from "../../Buttons/GeneralButton";

import { DivButtons, Form, ModalContent } from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../../store/modules/modalManagement/actions";

import { entranceCategorys, exitCategorys } from "../../../utils/dataBase";

import Modal from "../ModalContainer";
import DateInput from "../../Inputs/DateInput";

interface ICreateTransaction {
  name?: string;
  value?: number;
  date?: string;
  description?: string;
}

interface ICategory {
  id: number;
  name: string;
}

interface ITypemodalManagement {
  modalManagement: { type: string };
}

const NewTransactionModal: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const dispatch = useDispatch();

  const modalManagement = useSelector(
    (state: ITypemodalManagement) => state.modalManagement
  );

  useEffect(() => {
    //será substituído por uma função redux com requisição no banco de dados
    modalManagement.type === "entrance"
      ? setCategories(entranceCategorys)
      : setCategories(exitCategorys);
  }, [modalManagement.type]);

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    value: yup.number().required("Valor é obrigatório"),
    date: yup.string().required("Valor é obrigatório"),
    description: yup.string().required("Descrição é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    return new Promise(() => {
      setTimeout(() => dispatch(closeModal()), 800);
    });
  };

  const createTransaction = (data: ICreateTransaction) => {
    console.log(data);
    close();
  };

  useEffect(() => {
    !!modalManagement.type && setIsOpen(true);
  }, [modalManagement.type]);

  return (
    <Modal show={!!modalManagement.type} close={close} isOpenAnimate={isOpen}>
      <ModalContent type={modalManagement.type}>
        <h1>Cadastrar Transação</h1>
        <Form onSubmit={handleSubmit(createTransaction)}>
          <GeneralInput
            label="Nome"
            register={register}
            name={"name"}
            error={errors.name?.message}
          />
          <GeneralInput
            label="Valor"
            register={register}
            name={"value"}
            error={errors.value?.message && "O valor é inválido"}
            type="number"
          />
          <DateInput
            label="Data"
            register={register}
            name={"date"}
            error={errors.date?.message}
          />

          {/* <select></select> */}
          <TextArea
            label="Descrição"
            register={register}
            name={"description"}
            error={errors.email?.message}
            placeholder="Descrição da transação..."
            rows={4}
            cols={50}
          />
          <DivButtons>
            <Button className="cancel" onClick={close}>
              Cancelar
            </Button>
            <Button className="submit" type="submit">
              Salvar
            </Button>
          </DivButtons>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default NewTransactionModal;
