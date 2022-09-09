export const OrderCard = (): JSX.Element => {
  return (
    <div className="mb-[56px] overflow-hidden w-[1048px] h-[328px] rounded-[24px]  shadow-2xl bg-primary-regular">
      <div className="text-primary-regular">
        <div className="mt-[2.7%] ml-[2.7%] text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] font-bold font-menu-card leading-[1.2]">
          注文番号 #9521
        </div>
        <div className="mx-auto mt-[3.5%] w-[92%]">
          <ul className="my-auto font-bold font-menu-card pb-[1.7%] w-full border-b border-primary-regular border-dashed">
            <li className="flex items-center justify-center mb-[1.7%] w-full">
              <div className="flex items-center justify-center w-[5.8%] aspect-square text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] rounded-[16px] bg-accent-secondary-light-regular">
                🍔
              </div>
              <div className="ml-[1.2%] my-auto font-bold font-menu-card text-[24px]">
                ビーフハンバーガー
              </div>
              <div className="ml-auto my-auto mr-[10px] font-bold font-menu-card text-[24px]">
                4 x
              </div>
              <div className="ml-0 my-auto font-bold font-menu-card text-[28px] bg-accent-gradient-primary bg-clip-text text-[transparent]">
                <span className="text-[18px]">単品 ￥</span>490
              </div>
            </li>
            <li className="flex items-center justify-center  w-full">
              <div className="flex items-center justify-center w-[5.8%] aspect-square text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] rounded-[16px] bg-accent-secondary-light-regular">
                🍨
              </div>
              <div className="ml-[1.2%] my-auto font-bold font-menu-card text-[24px]">
                アイスハンバーグ
              </div>
              <div className="ml-auto my-auto mr-[10px] font-bold font-menu-card text-[24px]">
                10 x
              </div>
              <div className="ml-0 my-auto font-bold font-menu-card text-[28px] bg-accent-gradient-primary bg-clip-text text-[transparent]">
                <span className="text-[18px]">単品 ￥</span>230
              </div>
            </li>
          </ul>
          <div className="">
          <div className="mt-[2.2%] font-bold font-menu-card text-[28px]"><span className="text-[18px]">合計 ￥</span>4,260</div>
        </div>
        </div>
      </div>
    </div>
  );
};
// rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] w-[419px] md:w-[503px] lg:w-[671px] xl:w-[838px] 2xl:w-[1006px] h-[131px] md:h-[157px] lg:h-[210px] xl:h-[262px] 2xl:h-[315px]
