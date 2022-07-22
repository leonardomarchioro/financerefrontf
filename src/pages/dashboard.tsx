import HeaderDash from "../components/Headers/DahsboardHeader";
import { useState } from "react";
import AsideMenu from "../components/AsideMenu";
import { Container, Main } from "../styles/Dashboard/styles";
import MainTransactions from "../components/Transactions/MainTransactions";

const Dashboard: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
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
