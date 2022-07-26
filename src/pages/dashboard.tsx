import HeaderDash from "../components/Headers/DahsboardHeader";
import AsideMenu from "../components/AsideMenu";
import MainTransactions from "../components/Transactions/MainTransactions";
import NewTransactionModal from "../components/Modais/NewTransactionModal";

import { Container, Main } from "../styles/Dashboard/styles";

import { useState } from "react";

const Dashboard: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <NewTransactionModal />
      {showMenu && <AsideMenu setShowMenu={setShowMenu} showMenu={showMenu} />}
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
