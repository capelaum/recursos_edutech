import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import hero from "@public/hero.svg";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recursos EduTech</title>
      </Head>
      <div>
        <h1>Hello</h1>
        <Image src={hero} alt="Recursos EduTech" />
      </div>
    </>
  );
};

export default Home;
