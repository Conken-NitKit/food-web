interface Props {
  totalOrders: number;
  totalEarnings: number;
}

export const HomeEarnigs = ({
  totalOrders,
  totalEarnings,
}: Props): JSX.Element => {
  return (
    <div className="mt-[20px] md:mt-[24px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[48px] mx-auto w-[226px] md:w-[271px] lg:w-[361px] xl:w-[452px] 2xl:w-[542px] h-[94px] md:h-[112px] lg:h-[150px] xl:h-[187px] 2xl:h-[225px] text-primary-regular font-bold">
      <div className="flex items-center h-[14.1%]">
        <div className="text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px]">
          今月
        </div>
        <p className="ml-[2.12%] text-[10px] xl:text-[13px] 2xl:text-[15px] font-normal">
          {new Date().getFullYear()}年{new Date().getMonth() + 1}月
        </p>
      </div>
      <div className="flex items-center mt-[5.3%] w-full h-[41%]">
        <div className="pr-[12.6%] border-r border-secondary-regular text-center">
          <p className="mb-[13.5%] text-[10px] xl:text-[13px] 2xl:text-[15px]">
            売上合計
          </p>
          <p className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[23px] leading-none">
            ¥
            <span className="text-[13px] md:text-[15px] lg:text-[20px] xl:text-[26px] 2xl:text-[31px]">
              {totalEarnings.toLocaleString()}
            </span>
          </p>
        </div>
        <div className="pl-[14.2%] text-center">
          <p className="mb-[20.9%] text-[10px] xl:text-[13px] 2xl:text-[15px]">
            注文回数合計
          </p>
          <p className="text-[13px] md:text-[15px] lg:text-[20px] xl:text-[26px] 2xl:text-[31px] leading-none">
            {totalOrders.toLocaleString()}
          </p>
        </div>
      </div>
      <a className="flex items-center justify-center ml-auto mt-[8.3%] border border-secondary-regular rounded-[6px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] 2xl:rounded-[13px] w-[73.7%] h-[12.1%] text-[11px] 2xl:text-[13px] text-primary-regular">
        <p>売上解析ページを確認する</p>
      </a>
    </div>
  );
};
