import { NextPage } from "next";
import { useState } from "react";
import { MenuContent } from "../../types/MenuContent";

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

const Order: NextPage = () => {
  const [orderQuantity, setOrderQuantity] = useState<number>(0);

  const addCart = () => {
    setOrderQuantity((prev) => prev + 1);
  };

  return (
    <div>
      <div className="absolute w-full h-[224px] bg-red-a100" />
      <div className="absolute top-[176px] pt-[32px] pr-[15px] pl-[16px] w-full h-full bg-white-a100 rounded-t-[16px]">
        <p className="mb-[16px] text-brown-a100 text-[20px] font-bold">
          コンピュータ研究部
        </p>
        <div className="mb-[27px] text-gray-a100 text-[12px]">
          <p>プログラミングとかする部活です。</p>
          <p>平日の放課後は毎日活動しています。</p>
        </div>
        <ul>
          {Object.values(OrderContents).map((content) => {
            return (
              <li className="relative mb-[16px] pt-[18px] pb-[15px] pr-[14px] pl-[11px] w-full h-[94px] bg-navajowhite-a100 rounded-[13px]">
                <div className="grid grid-cols-5 grid-rows-1">
                  <div className="flex items-center text-center mt-[5px] w-[64px] h-[48px] font-menu-card font-bold text-[48px]">
                    {content.product.ideogram}
                  </div>
                  <div className="col-span-3 font-['Mulish'] text-[#121212]">
                    <div className="mb-[9px] font-bold">
                      {content.product.name}
                    </div>
                    <div className="text-[12px] opacity-[0.8] font-light whitespace-pre-line">
                      {content.product.promotion}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={addCart}
                  className="flex items-center justify-center absolute bottom-[0px] right-[0px] w-[78px] h-[34px] bg-red-a100 cursor-pointer rounded-tl-[13px] rounded-br-[13px] font-['Mulish'] text-white-a100 text-[13px] font-extrabold"
                >
                  + ADD
                </button>
                <div className="absolute bottom-[57px] right-[14px] w-[65px] h-[22px] font-menu-card text-brown-a100 text-[10px] font-bold">
                  単品 ￥{content.product.price}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="w-full h-[50px] bg-white-a100" />
      </div>
      <button
        type="button"
        className="flex items-center justify-center fixed bottom-[12px] left-[50%] w-[301px] h-[41px] translate-x-[-50%] bg-brown-a100 text-white-a100 font-light text-[12px] cursor-pointer"
      >
        カートを確認する({orderQuantity})
      </button>
    </div>
  );
};

export default Order;
