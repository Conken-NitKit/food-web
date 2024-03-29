import Image from "next/image";
import { OrderDetail, OrderState } from "../types";

interface Props {
  content: {
    products: OrderDetail[];
    state: OrderState;
    orderNumber: number;
  };
}

const getTotalAmount = (prev: number, cur: OrderDetail): number => {
  return prev + cur.price * cur.orderVolume;
};

export const OrderCard = ({ content }: Props): JSX.Element => {
  const totalAmount = content.products
    .reduce(getTotalAmount, 0)
    .toLocaleString();

  return (
    <div className="overflow-hidden rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] w-[419px] md:w-[503px] lg:w-[671px] xl:w-[838px] 2xl:w-[1006px] h-[131px] md:h-[157px] lg:h-[210px] xl:h-[262px] 2xl:h-[315px] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] font-bold font-menu-card text-primary-regular shadow-small md:shadow-middium lg:shadow-large xl:shadow-xl 2xl:shadow-2xl bg-primary-regular">
      <h3 className="ml-[2.7%] pt-[2.7%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] leading-[1.2]">
        注文番号 #{content.orderNumber}
      </h3>
      <div className="mx-auto mt-[3.5%] border-b border-primary-regular border-dashed w-[95%] h-[44.2%]">
        <ul className="grid overflow-y-scroll gap-y-[12.9%] mx-auto pb-[1.7%] w-[97%] h-[calc(100%+1px)]">
          {Object.values(content.products).map((product) => (
            <li className="flex items-center" key={product.name}>
              <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[5.8%] text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] bg-accent-secondary-light-regular">
                {product.ideogram}
              </div>
              <p className="ml-[1.2%]">{product.name}</p>
              <p className="ml-auto mr-[1.9%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px]">
                {product.orderVolume} x
              </p>
              <p className="ml-0 text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px] text-[transparent] bg-accent-gradient-primary bg-clip-text">
                単品 ￥
                <span className="text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px]">
                  {product.price.toLocaleString()}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center mt-[1.5%] mx-auto w-[92.4%] h-[17%]">
        <p className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
          合計 ￥
          <span className="text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px]">
            {totalAmount}
          </span>
        </p>
        {content.state === "waiting" && (
          <div className="flex justify-between ml-auto w-[14.1%]">
            <button className="flex items-center justify-center border border-reject-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[41.2%] bg-order-card-reject">
              <div className="relative w-[29.1%] aspect-square">
                <Image src="/reject.svg" layout="fill" />
              </div>
            </button>
            <button className="flex items-center justify-center border border-complete-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[41.2%] bg-order-card-complete">
              <div className="relative w-[41.5%] h-[33.2%]">
                <Image src="/complete.svg" layout="fill" />
              </div>
            </button>
          </div>
        )}
        {content.state === "done" && (
          <div className="flex items-center ml-auto border border-complete-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] w-[18.3%] h-full text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-complete-regular font-normal bg-order-card-complete">
            <div className="relative mx-[12%] w-[12.9%] h-[33.5%]">
              <Image src="/complete.svg" layout="fill" />
            </div>
            <p>提供済み</p>
          </div>
        )}
        {content.state === "canceled" && (
          <div className="flex items-center ml-auto border border-reject-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] w-[25.9%] h-full text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-reject-regular font-normal bg-order-card-reject">
            <div className="relative mx-[8.5%] w-[6.4%] aspect-square">
              <Image src="/reject.svg" layout="fill" />
            </div>
            <p>キャンセル済み</p>
          </div>
        )}
      </div>
    </div>
  );
};
