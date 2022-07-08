import { LayoutProps } from "../../types";

export const MenuCard: () => JSX.Element = () => {
  return (
    <div className="overflow-hidden shadow-md float-left w-[118px] md:w-[142px] lg:w-[189px] xl:w-[237px] 2xl:w-[284px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] m-[19px] md:m-[23px] lg:m-[31px] xl:m-[38px] 2xl:m-[46px]">
      <img
        src="https://www.freshnessburger.co.jp/images/menu/thumb/classic_burger.jpg?ver=220316_000357"
        className="h-[75px] md:h-[90px] lg:h-[120px] xl:h-[150px] 2xl:h-[180px] w-[100%]"
      />
      <div className="mx-auto w-[106px] md:w-[127px] lg:w-[169px] xl:w-[211px] 2xl:w-[253px] h-[48px] md:h-[58px] lg:h-[77px] xl:h-[97px] 2xl:h-[116px]">
        <div className="flex items-center h-[7px] md:h-[9px] lg:h-[12px] xl:h-[14px] 2xl:h-[17px] mt-[5px] md:mt-[6px] lg:mt-[8px] xl:mt-[10px] 2xl:mt-[12px] font-bold">
          <p className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
            ビーフハンバーガー
          </p>
        </div>
      </div>
    </div>
  );
};
