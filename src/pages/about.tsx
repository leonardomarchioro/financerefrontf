import Image from "next/image";

import AboutUs from "../assets/about.png";
import GeneralHeader from "../components/Headers/GeneralHeader";
import { Container, Main, Figure, ContainerText } from "../styles/About/styles";

const About: React.FC = () => {
  return (
    <Container>
      <GeneralHeader />
      <Main>
        <ContainerText>
          <h1>Sobre nós!</h1>
          <p>
            Nosso objetivo e ajudar as pessoas a contralar melhor seus ganhos e
            suas despesas, para assim ter uma saúde financeira melhor!
          </p>
        </ContainerText>
        <Figure>
          <Image src={AboutUs} alt="AboutUs" />
        </Figure>
      </Main>
    </Container>
  );
};

export default About;
