import type { NextPage } from "next";

import { MenuCard } from "../components";
import { FeatureLayout } from "../components/layouts";

//仮置きのデータ（実際はデータベースから取得する）
const MenuContents = {
  hamburger1: {
    ideogram: "🍔",
    products: "ビーフバーガー１",
    isSold: false,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    SalesFormat: "単品",
    price: 490000,
  },
  hamburger2: {
    ideogram: "🍔",
    products: "ビーフバーガー2",
    isSold: true,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    SalesFormat: "単品",
    price: 490,
  },
  hamburger3: {
    ideogram: "🍔",
    products: "ビーフバーガー3",
    isSold: false,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    SalesFormat: "単品",
    price: 490,
  },
  hamburger4: {
    ideogram: "🍔",
    products: "ビーフバーガー4",
    isSold: false,
    promotion:
      "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
    SalesFormat: "単品",
    price: 490,
  },
};

const Menu: NextPage = () => {
  return (
    <FeatureLayout type="menu">
      <ul className="flex flex-wrap ml-[-38px] 2xl:ml-[-46px] font-menu-card">
        {Object.values(MenuContents).map((content) => (
          <MenuCard
            key={content.products}
            ideogram={content.ideogram}
            products={content.products}
            isSold={content.isSold}
            promotion={content.promotion}
            SalesFormat={content.SalesFormat}
            price={content.price}
          />
        ))}
      </ul>
    </FeatureLayout>
  );
};

export default Menu;
