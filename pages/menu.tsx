import type { NextPage } from "next";

import { AddMenuCard, MenuCard } from "../components";
import { FeatureLayout } from "../components/layouts";
import { MenuContent } from "../types/MenuContent";

//仮置きのデータ（実際はデータベースから取得する）
const MenuContents: {
  [key: string]: {
    product: MenuContent;
    isSold: boolean;
  };
} = {
  hamburger1: {
    product: {
      ideogram: "🍔",
      name: "ビーフバーガー１",
      promotion:
        "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
      price: 490000,
    },
    isSold: false,
  },
  hamburger2: {
    product: {
      ideogram: "🍔",
      name: "ビーフバーガー２",
      promotion:
        "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
      price: 490000,
    },
    isSold: false,
  },
  hamburger3: {
    product: {
      ideogram: "🍔",
      name: "ビーフバーガー３",
      promotion:
        "おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。",
      price: 490000,
    },
    isSold: true,
  },
  hamburger4: {
    product: {
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
          <li key={content.product.name}>
            <MenuCard content={content.product} isSold={content.isSold} />
          </li>
        ))}
        <li>
          <AddMenuCard />
        </li>
      </ul>
    </FeatureLayout>
  );
};

export default Menu;
