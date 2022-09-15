import { OrderDetail, OrderState } from "../types";

interface Props {
  content: {
    products: OrderDetail[];
    state: OrderState;
    orderNumber: number;
  };
}

export const OrderCard = ({ content }: Props): JSX.Element => {
  return (
    <div className="overflow-hidden mb-[17px] md:mb-[20px] lg:mb-[27px] xl:mb-[34px] 2xl:mb-[40px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] w-[419px] md:w-[503px] lg:w-[671px] xl:w-[838px] 2xl:w-[1006px] h-[131px] md:h-[157px] lg:h-[210px] xl:h-[262px] 2xl:h-[315px] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] font-bold font-menu-card text-primary-regular shadow-regular bg-primary-regular">
      <h3 className="ml-[2.7%] pt-[2.7%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] leading-[1.2]">
        注文番号 #{content.orderNumber}
      </h3>
      <div className="mx-auto mt-[3.5%] border-b border-primary-regular border-dashed w-[95%] h-[44.2%]">
        <ul className="overflow-scroll mx-auto pb-[1.7%] w-[97%] h-[101%]">
          {Object.values(content.products).map((product) => (
            <li
              className="flex items-center mb-[1.7%] last:mb-0"
              key={product.name}
            >
              <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[5.8%] text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] bg-accent-secondary-light-regular">
                {product.ideogram}
              </div>
              <div className="ml-[1.2%]">{product.name}</div>
              <div className="ml-auto mr-[1.9%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px]">
                {product.orderVolume} x
              </div>
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
            {content.products
              .reduce((acc, cur) => acc + cur.price * cur.orderVolume, 0)
              .toLocaleString()}
          </span>
        </p>
        {content.state === "waiting" && (
          <div className="flex justify-between ml-auto w-[14.1%]">
            <button className="flex items-center justify-center border border-reject-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[41.2%] bg-order-card-reject">
              <img src="/reject.svg" className="w-[29%]" />
            </button>
            <button className="flex items-center justify-center border border-complete-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[41.2%] bg-order-card-complete">
              <img src="/complete.svg" className="w-[42%]" />
            </button>
          </div>
        )}
        {content.state === "done" && (
          <div className="flex items-center ml-auto border border-complete-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] w-[18.3%] h-full text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-complete-regular font-normal bg-order-card-complete">
            <img src="/complete.svg" className="mx-[12%] w-[13%]" />
            提供済み
          </div>
        )}
        {content.state === "canceled" && (
          <div className="flex items-center ml-auto border border-reject-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] w-[25.9%] h-full text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-reject-regular font-normal bg-order-card-reject">
            <img src="/reject.svg" className="mx-[8.5%] w-[6.3%]" />
            キャンセル済み
          </div>
        )}
      </div>
    </div>
  );
};
