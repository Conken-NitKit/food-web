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
        <p className="text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] mt-[4px] md:mt-[5px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[10px]">
          おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。
        </p>
        <div className="flex items-center">
          <p className="text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] font-bold ">
            単品 ￥
            <span className="text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px]">
              490
            </span>
          </p>
          <div className="text-center w-[38px] md:w-[46px] lg:w-[61px] xl:w-[77px] 2xl:w-[92px] py-[1px] md:py-[1px] lg:py-[2px] xl:py-[2px] 2xl:py-[3px] bg-[#FFBC0D] rounded-[2px] md:rounded-[2px] lg:rounded-[3px] xl:rounded-[3px] 2xl:rounded-[4px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] ml-[auto]">
            内容を編集
          </div>
        </div>
      </div>
    </div>
  );
};
