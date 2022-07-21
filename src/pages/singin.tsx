import GeneralHeader from "../components/GeneralHeader";
import FormSignIn from "../components/SignInForm";

import SingnInImg from "../assets/login.png";
import Image from "next/image";
import { Container, Figure, Main } from "../styles/SignIn/styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <GeneralHeader path="/" />
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
