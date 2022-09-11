import { MenuContent } from "../types/MenuContent";
import { OrderState } from "../types/OrderState";

interface Props {
  state: OrderState;
  content: MenuContent;
}

export const OrderCard = ({ state, content }: Props): JSX.Element => {
  return (
    <div className="overflow-hidden mb-[17px] md:mb-[20px] lg:mb-[27px] xl:mb-[34px] 2xl:mb-[40px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] w-[419px] md:w-[503px] lg:w-[671px] xl:w-[838px] 2xl:w-[1006px] h-[131px] md:h-[157px] lg:h-[210px] xl:h-[262px] 2xl:h-[315px] font-bold font-menu-card text-primary-regular shadow-2xl bg-primary-regular">
      <div className="pt-[2.7%] ml-[2.7%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] leading-[1.2]">
        注文番号 #9521
      </div>
      <div className="mx-auto mt-[3.5%] border-b border-primary-regular border-dashed w-[95%] h-[44.2%]">
        <ul className="overflow-scroll mx-auto pb-[1.7%] w-[97%] h-full">
          <li className="flex items-center mb-[1.7%]">
            <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[5.8%] text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] bg-accent-secondary-light-regular">
              🍔
            </div>
            <div className="ml-[1.2%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px]">
              ビーフハンバーガー
            </div>
            <div className="ml-auto mr-[1.9%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px]">
              4 x
            </div>
            <div className="ml-0 text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] text-[transparent] bg-accent-gradient-primary bg-clip-text">
              <span className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
                単品 ￥
              </span>
              490
            </div>
          </li>
          <li className="flex items-center mb-[1.7%]">
            <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] aspect-square w-[5.8%] text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] bg-accent-secondary-light-regular">
              🍨
            </div>
            <div className="ml-[1.2%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px]">
              アイスハンバーグ
            </div>
            <div className="ml-auto mr-[1.9%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px]">
              10 x
            </div>
            <div className="ml-0 text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] text-[transparent] bg-accent-gradient-primary bg-clip-text">
              <span className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
                単品 ￥
              </span>
              230
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center mt-[1.5%] mx-auto w-[92.4%] h-[17%]">
        <div className="text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px]">
          <span className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
            合計 ￥
          </span>
          4,260
        </div>
        {state === "wait" && (
          <div className="flex justify-between ml-auto w-[14.1%]">
            <div className="border border-reject-regular aspect-square w-[41.2%] rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] bg-order-card-reject"></div>
            <div className="border border-complete-regular aspect-square w-[41.2%] rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] bg-order-card-complete"></div>
          </div>
        )}
        {state === "complete" && (
          <div className="flex items-center justify-center ml-auto border border-complete-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] w-[18.3%] h-full text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-complete-regular font-normal bg-order-card-complete">
            提供済み
          </div>
        )}
        {state === "reject" && (
          <div className="flex items-center justify-center ml-auto border border-reject-regular rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] w-[25.9%] h-full text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-reject-regular font-normal bg-order-card-reject">
            キャンセル済み
          </div>
        )}
      </div>
    </div>
  );
};
