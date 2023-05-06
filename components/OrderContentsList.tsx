import { memo } from "react";
import { MenuContent } from "../types/MenuContent";

type Props = {
  addCart: () => void;
};

//仮置きのデータ（実際はデータベースから取得する）
const OrderContents: {
  [key: string]: {
    product: MenuContent;
    isSold: boolean;
  };
} = {
  dashimaki1: {
    product: {
      ideogram: "🍔",
      name: "だし巻き玉子",
      promotion: "和食とっても美味しいよ！\nみんな大好き！",
      price: 490,
    },
    isSold: false,
  },
  dashimaki2: {
    product: {
      ideogram: "🍔",
      name: "だし巻き玉子",
      promotion: "和食とっても美味しいよ！\nみんな大好き！",
      price: 490,
    },
    isSold: false,
  },
  dashimaki3: {
    product: {
      ideogram: "🍔",
      name: "だし巻き玉子",
      promotion: "和食とっても美味しいよ！\nみんな大好き！",
      price: 490,
    },
    isSold: false,
  },
  dashimaki4: {
    product: {
      ideogram: "🍔",
      name: "だし巻き玉子",
      promotion: "和食とっても美味しいよ！\nみんな大好き！",
      price: 490,
    },
    isSold: false,
  },
  dashimaki5: {
    product: {
      ideogram: "🍔",
      name: "だし巻き玉子",
      promotion: "和食とっても美味しいよ！\nみんな大好き！",
      price: 490,
    },
    isSold: false,
  },
};

export const OrderContentsList = memo(({ addCart }: Props) => {
  return (
    <div>
      <ul>
        {Object.entries(OrderContents).map(([key, content]) => {
          return (
            <li
              key={key}
              className="flex relative mb-[16px] pt-[15px] pb-[15px] pr-[14px] pl-[11px] w-full h-[94px] bg-navajowhite-a100 rounded-[13px]"
            >
              <div className="flex items-center text-center mt-[8px] mr-[6px] w-[64px] h-[48px] font-menu-card font-bold text-[48px]">
                {content.product.ideogram}
              </div>
              <div className="flex-auto mt-[3px] font-['Mulish'] text-[#121212]">
                <div className="mb-[9px] h-[16px] font-bold">
                  {content.product.name}
                </div>
                <div className="text-[12px] opacity-[0.8] font-light whitespace-pre-line">
                  {content.product.promotion}
                </div>
              </div>
              <div className="ml-[6px] w-[65px] h-[22px] font-menu-card text-brown-a100 text-[10px] font-bold">
                単品 ￥{content.product.price}
              </div>
              <button
                type="button"
                onClick={addCart}
                className="flex items-center justify-center absolute bottom-[0px] right-[0px] w-[78px] h-[34px] bg-red-a100 cursor-pointer rounded-tl-[13px] rounded-br-[13px] font-['Mulish'] text-white-a100 text-[13px] font-extrabold"
              >
                + ADD
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
