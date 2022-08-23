import type { NextPage } from "next";

import { MenuCard } from "../components";
import { FeatureLayout } from "../components/layouts";
import { MenuContentsProps } from "../types/MenuContentsProps";

//仮置きのデータ（実際はデータベースから取得する）
const MenuContents: {
  [key: string]: {
    content: MenuContentsProps;
    isSold: boolean;
  };
} = {
  hamburger1: {
    content: {
      ideogram: "🍔",
      name: "ビーフバーガー１",
      promotion:
        "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
      price: 490000,
    },
    isSold: false,
  },
  hamburger2: {
    content: {
      ideogram: "🍔",
      name: "ビーフバーガー２",
      promotion:
        "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
      price: 490000,
    },
    isSold: false,
  },
  hamburger3: {
    content: {
      ideogram: "🍔",
      name: "ビーフバーガー３",
      promotion:
        "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
      price: 490000,
    },
    isSold: true,
  },
  hamburger4: {
    content: {
      ideogram: "🍔",
      name: "ビーフバーガー４",
      promotion:
        "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
      price: 490000,
    },
    isSold: false,
  },
};

const Menu: NextPage = () => {
  return (
    <FeatureLayout type="menu">
      <ul className="flex flex-wrap ml-[-38px] 2xl:ml-[-46px]">
        {Object.values(MenuContents).map((content) => (
          <MenuCard
            key={content.content.name}
            content={content.content}
            isSold={content.isSold}
          />
        ))}
      </ul>
    </FeatureLayout>
  );
};

export default Menu;
