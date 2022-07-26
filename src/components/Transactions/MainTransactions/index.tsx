import { transactions } from "../../../utils/dataBase";
import TransactionModal from "../../Modais/TransactionModal";
import NoTransactions from "../EmptyTransactions";
import TransactionsList from "../Transactions";
import { Container } from "./styles";

const MainTransactions: React.FC = () => {
  return (
    <>
      <TransactionModal />
      <Container>
        {transactions.length ? (
          <TransactionsList transactions={transactions} />
        ) : (
          <NoTransactions />
        )}
      </Container>
    </>
  );
};

export default MainTransactions;
