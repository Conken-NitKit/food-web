import { NextPage } from "next";
import Image from "next/image";
import { useCallback, useState } from "react";
import { OrderContentsList } from "../../components/OrderContentsList";

const Order: NextPage = () => {
  const [orderQuantity, setOrderQuantity] = useState<number>(0);

  // TODO: ここに商品が選択された時の処理を追加する
  const addCart = useCallback(() => {
    setOrderQuantity((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div className="fixed w-full h-[224px] z-[-1]">
        <Image
          src="/order-page-header.png"
          alt="order-page-header"
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>
      <div className="absolute top-[176px] pt-[32px] pb-[49px] pr-[15px] pl-[16px] w-full bg-white-a100 rounded-t-[16px]">
        <h1 className="mb-[16px] text-brown-a100 text-[20px] font-bold">
          コンピュータ研究部
        </h1>
        <div className="mb-[27px] text-gray-a100 text-[12px]">
          <p>プログラミングとかする部活です。</p>
          <p>平日の放課後は毎日活動しています。</p>
        </div>
        <OrderContentsList addCart={addCart} />
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
