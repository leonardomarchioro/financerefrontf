import moment from "moment";
import { useDispatch } from "react-redux";
import { setObjTransaction } from "../../../store/modules/transaction/actions";

import { ITrasaction } from "../../../interfaces";

import { Card, Content, Infos, ListContainer } from "./styles";

const TransactionsList: React.FC<{ transactions: ITrasaction[] }> = ({
  transactions,
}) => {
  const dispatch = useDispatch();

  const handleModal = (transaction: ITrasaction) => {
    dispatch(setObjTransaction(transaction));
  };

  return (
    <>
      <ListContainer>
        {transactions.map((transaction) => (
          <Card
            key={transaction.id}
            className={transaction.type}
            onClick={() => handleModal(transaction)}
          >
            <h1>{transaction.title}</h1>
            <Content>
              <Infos>
                <span>{moment(transaction.date).format("DD/MM/YYYY")}</span>
                <span>${transaction.value.toFixed(2)}</span>
              </Infos>
            </Content>
          </Card>
        ))}
      </ListContainer>
    </>
  );
};

export default TransactionsList;
