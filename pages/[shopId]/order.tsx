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
      <div>
        <p>コンピュータ研究部</p>
        <div>
          <p>プログラミングとかする部活です。</p>
          <p>平日の放課後は毎日活動しています。</p>
        </div>
        <ul>
          {Object.values(OrderContents).map((content) => {
            return (
              <li>
                <div>{content.product.ideogram}</div>
                <div>
                  <div>{content.product.name}</div>
                  <div>{content.product.promotion}</div>
                </div>
                <div>単品 ￥{content.product.price}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Order;
