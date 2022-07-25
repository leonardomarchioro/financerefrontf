import GeneralInput from "../../Inputs/GeneralInput";
import { ContainerModal, Modal } from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/modules/transactionModal/actions";

interface ICreateTransaction {
  name?: string;
  value?: number;
  date?: string;
  description?: string;
}

const NewTransactionModal: React.FC<{ type: string }> = ({ type }) => {
  const dispatch = useDispatch();
  console.log(type);
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

  const createTransaction = (data: ICreateTransaction) => {
    console.log(data);
  };

  return (
    <ContainerModal>
      <Modal className={type}>
        <form onSubmit={handleSubmit(createTransaction)}>
          <GeneralInput
            label="Nome"
            register={register}
            name={"name"}
            error={errors.name?.message}
            placeholder="Nome da transação..."
          />
          <div>
            <GeneralInput
              label="Valor"
              register={register}
              name={"value"}
              error={errors.value?.message}
              type="float"
              placeholder="Valor da transação..."
            />
            <GeneralInput
              label="Data"
              register={register}
              name={"date"}
              error={errors.date?.message}
              type="date"
            />
          </div>
          {/* <select></select> */}
          <GeneralInput
            label="Descrição"
            register={register}
            name={"description"}
            error={errors.email?.message}
            type="text"
            placeholder="Descrição da transação..."
          />
          <button type="submit">enviar</button>
        </form>
        <button onClick={() => dispatch(closeModal())}>X</button>
      </Modal>
    </ContainerModal>
  );
};

export default NewTransactionModal;
