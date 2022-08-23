import type { NextPage } from "next";

import { MenuCard } from "../components";
import { FeatureLayout } from "../components/layouts";

//仮置きのデータ（実際はデータベースから取得する）
const MenuContents = {
  hamburger1: {
    ideogram: "🍔",
    name: "ビーフバーガー１",
    isSold: false,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    price: 490000,
  },
  hamburger2: {
    ideogram: "🍔",
    name: "ビーフバーガー2",
    isSold: true,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    price: 490,
  },
  hamburger3: {
    ideogram: "🍔",
    name: "ビーフバーガー3",
    isSold: false,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    price: 490,
  },
  hamburger4: {
    ideogram: "🍔",
    name: "ビーフバーガー4",
    isSold: false,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    price: 490,
  },
};

const Menu: NextPage = () => {
  return (
    <FeatureLayout type="menu">
      <ul className="flex flex-wrap ml-[-38px] 2xl:ml-[-46px]">
        {Object.values(MenuContents).map((content) => (
          <MenuCard
            key={content.name}
            content={content}
            isSold={content.isSold}
          />
        ))}
      </ul>
    </FeatureLayout>
  );
};

export default Menu;
