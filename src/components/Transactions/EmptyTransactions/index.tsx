import { ContainerEmpty, Figure } from "./styles";
import EmptyImg from "../../../assets/empty.png";
import Image from "next/image";
const NoTransactions: React.FC = () => {
  return (
    <ContainerEmpty>
      <Figure>
        <Image src={EmptyImg} alt="Empty" />
      </Figure>
      <h1>Adicione entradas ou saídas</h1>
    </ContainerEmpty>
  );
};

export default NoTransactions;
