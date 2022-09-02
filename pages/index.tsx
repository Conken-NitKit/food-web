import type { NextPage } from "next";
import Head from "next/head";
import { AddMenuCard } from "../components";

import { FeatureLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 仮置き */}

      <FeatureLayout type="menu">
        <>
        <AddMenuCard />
        </>
      </FeatureLayout>

      {/* 仮置きここまで */}
    </div>
  );
};

export default Home;
