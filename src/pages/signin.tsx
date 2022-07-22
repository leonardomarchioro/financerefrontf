import GeneralHeader from "../components/Headers/GeneralHeader";
import FormSignIn from "../components/Forms/SignInForm";

import SingnInImg from "../assets/login.png";
import Image from "next/image";
import { Container, Figure, Main } from "../styles/SignIn/styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <GeneralHeader />
      <Main>
        <FormSignIn />
        <Figure>
          <Image src={SingnInImg} alt="SignIn" />
        </Figure>
      </Main>
    </Container>
  );
};

export default SignIn;
