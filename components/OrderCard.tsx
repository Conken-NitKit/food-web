export const OrderCard = (): JSX.Element => {
  return (
    <div className="mb-[17px] md:mb-[20px] lg:mb-[27px] xl:mb-[34px] 2xl:mb-[40px] overflow-hidden rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] w-[419px] md:w-[503px] lg:w-[671px] xl:w-[838px] 2xl:w-[1006px] h-[131px] md:h-[157px] lg:h-[210px] xl:h-[262px] 2xl:h-[315px] shadow-2xl bg-primary-regular">
      <div className="mt-[2.7%] ml-[2.7%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] font-bold font-menu-card leading-[1.2] text-primary-regular">
        注文番号 #9521
      </div>
      <div className="mt-[3.5%] mx-auto w-[95%] border-b border-primary-regular border-dashed">
        <ul className="mx-auto my-auto w-[97%] font-bold font-menu-card pb-[1.7%]">
          <li className="flex items-center justify-center mb-[1.7%] w-full">
            <div className="flex items-center justify-center w-[5.8%] aspect-square text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px]  bg-accent-secondary-light-regular">
              🍔
            </div>
            <div className="ml-[1.2%] my-auto font-bold font-menu-card text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-primary-regular">
              ビーフハンバーガー
            </div>
            <div className="ml-auto my-auto mr-[1.9%] font-bold font-menu-card text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-primary-regular">
              4 x
            </div>
            <div className="ml-0 my-auto font-bold font-menu-card text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] bg-accent-gradient-primary bg-clip-text text-[transparent]">
              <span className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
                単品 ￥
              </span>
              490
            </div>
          </li>
          <li className="flex items-center justify-center  w-full">
            <div className="flex items-center justify-center w-[5.8%] aspect-square text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px]  bg-accent-secondary-light-regular">
              🍨
            </div>
            <div className="ml-[1.2%] my-auto font-bold font-menu-card text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-primary-regular">
              アイスハンバーグ
            </div>
            <div className="ml-auto my-auto mr-[1.9%] font-bold font-menu-card text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] text-primary-regular">
              10 x
            </div>
            <div className="ml-0 my-auto font-bold font-menu-card text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] bg-accent-gradient-primary bg-clip-text text-[transparent]">
              <span className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
                単品 ￥
              </span>
              230
            </div>
          </li>
        </ul>
      </div>
      <div className="flex mx-auto w-[92.4%]">
        <div className="mt-[2.3%] font-bold font-menu-card text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] text-primary-regular">
          <span className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px] text-primary-regular">
            合計 ￥
          </span>
          4,260
        </div>
        <div className="mt-[1.5%] h-full flex justify-between w-[13%] ml-auto">
          <div className="w-[41.2%] aspect-square bg-order-card-reject rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px]  border border-reject-regular"></div>
          <div className="w-[41.2%] aspect-square bg-order-card-complete rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px]  border border-complete-regular"></div>
        </div>
      </div>
    </div>
  );
};
