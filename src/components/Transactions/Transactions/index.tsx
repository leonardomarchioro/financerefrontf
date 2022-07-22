import moment from "moment";
import { useState } from "react";

import { ITrasaction } from "../../../interfaces";
import TransactionModal from "../../Modais/TransactionModal";

import { Card, Content, Infos, ListContainer } from "./styles";

const TransactionsList: React.FC<{ transactions: ITrasaction[] }> = ({
  transactions,
}) => {
  const [modal, setModal] = useState<boolean>(false);
  const [valueModal, setValueModal] = useState<ITrasaction | undefined>();

  const handleModal = (transaction: ITrasaction) => {
    console.log(transaction);
    setModal(true);
    setValueModal(transaction);
  };

  return (
    <>
      {modal && (
        <TransactionModal setModal={setModal} transaction={valueModal!} />
      )}
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
                <span>{transaction.value}</span>
              </Infos>
            </Content>
          </Card>
        ))}
      </ListContainer>
    </>
  );
};

export default TransactionsList;
