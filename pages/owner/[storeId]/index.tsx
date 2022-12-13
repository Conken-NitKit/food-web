import type { NextPage } from "next";
import Head from "next/head";
import { GuideCaption, LinkButton } from "../../../components";
import { BasicLayout } from "../../../components/layouts";
import { useMemo } from "react";
import { copyUrl } from "../../../utils/copyUrl";

interface GuideContent {
  guideId: number;
  ideogram: string;
  description: string;
}

const GUIDE_MOCKS: GuideContent[] = [
  {
    guideId: 1,
    ideogram: "🖥",
    description: "あああああああああああああああああああああああああああ",
  },
  {
    guideId: 2,
    ideogram: "🖥",
    description: "あああああああああああああああああああああああああああ",
  },
  {
    guideId: 3,
    ideogram: "🖥",
    description: "あああああああああああああああああああああああああああ",
  },
  {
    guideId: 4,
    ideogram: "🖥",
    description: "あああああああああああああああああああああああああああ",
  },
  {
    guideId: 5,
    ideogram: "🖥",
    description: "あああああああああああああああああああああああああああ",
  },
  {
    guideId: 6,
    ideogram: "🖥",
    description: "あああああああああああああああああああああああああああ",
  },
  {
    guideId: 7,
    ideogram: "🖥",
    description: "あああああああああああああああああああああああああああ",
  },
];

const Home: NextPage = () => {
  const getDate = useMemo(() => {
    return `${new Date().getFullYear()}年${new Date().getMonth() + 1}月`;
  }, []);

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout type="home">
        <div className="flex mx-auto mt-[29px] md:mt-[35px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[69px] w-[266px] md:w-[320px] lg:w-[426px] xl:w-[533px] 2xl:w-[639px] h-[52px] md:h-[62px] lg:h-[83px] xl:h-[103px] 2xl:h-[124px] font-bold">
          <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] h-full aspect-square text-[19px] md:text-[23px] lg:text-[31px] xl:text-[38px] 2xl:text-[46px] bg-secondary-regular">
            🖥
          </div>
          <div className="my-auto ml-[3.3%] w-full">
            <h1 className="overflow-scroll h-[17px] md:h-[20px] lg:h-[27px] xl:h-[34px] 2xl:h-[40px] text-[14px] md:text-[17px] lg:text-[23px] xl:text-[29px] 2xl:text-[35px] text-primary-regular font-regular leading-[1.17]">
              コンピュータ研究部
            </h1>
            <p className="mt-[1.56%] text-[10px] xl:text-[13px] 2xl:text-[15px] text-secondary-regular font-normal font-regular leading-[1.19]">
              https://food-web-alpha.vercel.app/
            </p>
            <div className="flex item-center mt-[3.5%] h-[22.7%]">
              <LinkButton
                pcLabel="モバイルオーダー用ページを確認する"
                spLabel="モバイルオーダーページ"
                pagePath="https://food-web-alpha.vercel.app/menu"
              />
              <button
                onClick={copyUrl}
                className="flex justify-center items-center ml-auto border border-tertiary-regular rounded-[6px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] 2xl:rounded-[13px] w-[17.1%] h-[18px] xl:h-[22px] 2xl:h-[27px] text-[11px] 2xl:text-[13px] text-primary-inverted font-menu-card bg-primary-dark-regular !leading-none"
              >
                コピー
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[260px] md:w-[312px] lg:w-[415px] xl:w-[519px] 2xl:w-[623px]">
          <div className="mt-[20px] md:mt-[24px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[48px] w-[226px] md:w-[271px] lg:w-[361px] xl:w-[452px] 2xl:w-[542px] h-[94px] md:h-[112px] lg:h-[150px] xl:h-[187px] 2xl:h-[225px] text-primary-regular font-bold font-regular">
            <div className="flex items-center h-[14.1%]">
              <div className="text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px]">
                今月
              </div>
              <p className="ml-[2.12%] text-[10px] xl:text-[13px] 2xl:text-[15px] font-normal">
                {getDate}
              </p>
            </div>
            <div className="flex items-center mt-[5.3%] w-full h-[41%]">
              <div className="pr-[12.6%] border-r border-tertiary-regular text-center">
                <p className="mb-[13.5%] text-[10px] xl:text-[13px] 2xl:text-[15px] font-normal">
                  売上合計
                </p>
                <p className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] leading-none">
                  ¥
                  <span className="text-[13px] md:text-[15px] lg:text-[20px] xl:text-[26px] 2xl:text-[31px]">
                    {(361280).toLocaleString()}
                  </span>
                </p>
              </div>
              <div className="pl-[14.2%] text-center">
                <p className="mb-[20.9%] text-[10px] xl:text-[13px] 2xl:text-[15px] font-normal">
                  注文回数合計
                </p>
                <p className="text-[13px] md:text-[15px] lg:text-[20px] xl:text-[26px] 2xl:text-[31px] leading-none">
                  {(962).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-[8.3%]">
              <LinkButton
                pcLabel="売上解析ページを確認する"
                spLabel="売上解析ページ"
                pagePath="https://food-web-alpha.vercel.app/sales"
              />
            </div>
          </div>
          <div className="mt-[14px] md:mt-[17px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[35px] w-[260px] md:w-[312px] lg:w-[415px] xl:w-[519px] 2xl:w-[623px] h-[121px] md:h-[145px] lg:h-[193px] xl:h-[242px] 2xl:h-[290px] text-primary-regular font-bold">
            <div className="text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px]">
              使い方
            </div>
            <ul className="overflow-scroll flex flex-wrap mt-[4.93%] gap-x-[calc(100%-246px)] md:gap-x-[calc(100%-296px)] lg:gap-x-[calc(100%-394px)] xl:gap-x-[calc(100%-492px)] 2xl:gap-x-[calc(100%-592px)] gap-y-[9px] md:gap-y-[10px] lg:gap-y-[14px] xl:gap-y-[17px] 2xl:gap-y-[21px] h-[85%]">
              {GUIDE_MOCKS.map((guide) => (
                <li key={guide.guideId}>
                  <GuideCaption
                    ideogram={guide.ideogram}
                    description={guide.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BasicLayout>
    </div>
  );
};
export default Home;
