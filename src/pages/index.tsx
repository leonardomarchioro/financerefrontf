import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/HeaderHome";

import HomeImg from "../assets/home.png";

import { Container, Main, Figure, ContainerText } from "../styles/Home/styles";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Finance Plataform</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <ContainerText>
            <h1>Finance Plataform</h1>
            <p>Controle suas finanças de um jeito prático e fácil</p>
            <Link href="/signup">Inscreva-se já</Link>
          </ContainerText>
          <Figure>
            <Image src={HomeImg} alt="Finance Control" />
          </Figure>
        </Main>
      </Container>
    </div>
  );
};

export default Home;
