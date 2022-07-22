import HeaderDash from "../components/Headers/DahsboardHeader";
import { useState } from "react";
import AsideMenu from "../components/AsideMenu";
import { Container } from "../styles/Dashboard/styles";

const Dashboard: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu && <AsideMenu setShowMenu={setShowMenu} />}
      <Container>
        <HeaderDash setShowMenu={setShowMenu} />
        <main>MAIN</main>
      </Container>
    </>
  );
};

export default Dashboard;
