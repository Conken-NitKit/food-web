import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { SideBar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideBar></SideBar>
    </div>
  );
};

export default Home;
