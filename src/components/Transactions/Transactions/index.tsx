import { ITrasaction } from "../../../interfaces";
import moment from "moment";
import { ListContainer } from "./styles";

const TransactionsList: React.FC<{ transactions: ITrasaction[] }> = ({
  transactions,
}) => {
  return (
    <ListContainer>
      {transactions.map((transaction) => (
        <li key={transaction.id} className={transaction.type}>
          <h1>{transaction.title}</h1>
          <span>{transaction.category}</span>
          <span>{moment(transaction.date).format("DD/MM/YYYY")}</span>
          <span>{transaction.value}</span>
        </li>
      ))}
    </ListContainer>
  );
};

export default TransactionsList;
