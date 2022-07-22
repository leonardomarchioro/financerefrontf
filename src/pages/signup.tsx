import Image from "next/image";
import GeneralHeader from "../components/Headers/GeneralHeader";

import { Container, Figure, Main } from "../styles/SignUp/styles";

import RegisterImg from "../assets/register.png";
import FormSignUp from "../components/Forms/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <Container>
      <GeneralHeader />
      <Main>
        <FormSignUp />
        <Figure>
          <Image src={RegisterImg} alt="RegisterImg" />
        </Figure>
      </Main>
    </Container>
  );
};

export default SignUp;
