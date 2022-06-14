import type { NextPage } from "next";
import Head from "next/head";

import { BasicLayout } from "../components/layouts";
import { FeaturePageLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 仮置き */}

      <BasicLayout chosen="menu">
        <FeaturePageLayout title="メニュー"></FeaturePageLayout>
      </BasicLayout>

      {/* 仮置きここまで */}
    </div>
  );
};

export default Home;
