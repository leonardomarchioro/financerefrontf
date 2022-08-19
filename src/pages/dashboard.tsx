import HeaderDash from "../components/Headers/DahsboardHeader";
import AsideMenu from "../components/AsideMenu";
import MainTransactions from "../components/Transactions/MainTransactions";
import NewTransactionModal from "../components/Modals/NewTransactionModal";

import { Container, Main } from "../styles/Dashboard/styles";

import { useState } from "react";

const Dashboard: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <NewTransactionModal />
      <AsideMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      <Container showMenu={showMenu}>
        <HeaderDash setShowMenu={setShowMenu} />
        <Main>
          <MainTransactions />
        </Main>
      </Container>
    </>
  );
};

export default Dashboard;
