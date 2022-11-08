import { NextPage } from "next";
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
  return (
    <div>
      <div className="absolute w-full h-[224px] bg-red-a100"></div>
      <div className="absolute top-[176px] pt-[32px] pr-[15px] pl-[16px] w-full h-full bg-white-a100 rounded-t-[16px]">
        <p className="mb-[16px]">コンピュータ研究部</p>
        <div className="mb-[27px]">
          <p>プログラミングとかする部活です。</p>
          <p>平日の放課後は毎日活動しています。</p>
        </div>
        <ul>
          {Object.values(OrderContents).map((content) => {
            return (
              <li className="relative mb-[16px] pt-[18px] pb-[15px] pr-[14px] pl-[11px] w-full h-[94px] bg-navajowhite-a100 rounded-[13px]">
                <div className="grid grid-cols-5 grid-rows-1">
                  <div>{content.product.ideogram}</div>
                  <div className="col-span-3">
                    <div>{content.product.name}</div>
                    <div>{content.product.promotion}</div>
                  </div>
                  <div>単品 ￥{content.product.price}</div>
                </div>
                <div className="flex items-center justify-center absolute bottom-[0px] right-[0px] w-[78px] h-[34px] bg-red-a100 rounded-tl-[13px] rounded-br-[13px]">
                  + ADD
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center fixed bottom-[12px] left-[50%] w-[301px] h-[41px] translate-x-[-50%] bg-brown-a100 text-white-a100">
        カートを確認する(1)
      </div>
    </div>
  );
};

export default Order;
