import type { NextPage } from "next";
import { useState } from "react";

import { AddMenuCard, MenuCard } from "../components";
import { FeatureLayout } from "../components/layouts";
import { MenuModal } from "../components/MenuModal";
import { MenuContent } from "../types/MenuContent";

interface menuContent {
  [key: string]: {
    product: MenuContent;
    isSold: boolean;
  };
}

const Menu: NextPage = () => {
  //仮置きのデータ（実際はデータベースから取得する）
  const [menuContents, setMenuContents] = useState<menuContent>({
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
  });

  return (
    <FeatureLayout type="menu">
      <ul className="flex flex-wrap pt-[48px] 2xl:pt-[58px] gap-y-[48px] 2xl:gap-y-[58px] gap-x-[38px] 2xl:gap-x-[46px]">
        {Object.values(menuContents).map((content) => (
          <li key={content.product.name}>
            <MenuCard content={content.product} isSold={content.isSold} />
          </li>
        ))}
        <li key="add-menu-card">
          <AddMenuCard />
        </li>
      </ul>
      <MenuModal />
    </FeatureLayout>
  );
};

export default Menu;
