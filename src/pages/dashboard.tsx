import HeaderDash from "../components/Headers/DahsboardHeader";
import { useState } from "react";
import AsideMenu from "../components/AsideMenu";
import { Container, Main } from "../styles/Dashboard/styles";
import MainTransactions from "../components/Transactions/MainTransactions";
import NewTransactionModal from "../components/Modais/NewTransactionModal";

import { useSelector } from "react-redux";

const Dashboard: React.FC = () => {
  interface ITypeModalCreate {
    modalCreate: { type: string };
  }

  const modalCreate = useSelector(
    (state: ITypeModalCreate) => state.modalCreate
  );

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {modalCreate.type && <NewTransactionModal type={modalCreate.type} />}
      {showMenu && <AsideMenu setShowMenu={setShowMenu} />}
      <Container>
        <HeaderDash setShowMenu={setShowMenu} />
        <Main>
          <MainTransactions />
        </Main>
      </Container>
    </>
  );
};

export default Dashboard;
