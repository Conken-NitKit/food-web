import { LayoutProps } from "../../types";

export const MenuCard: () => JSX.Element = () => {
  return (
    <div className="overflow-hidden shadow-md float-left w-[118px] md:w-[142px] lg:w-[189px] xl:w-[237px] 2xl:w-[284px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] m-[19px] md:m-[23px] lg:m-[31px] xl:m-[38px] 2xl:m-[46px]">
      <img
        src="https://www.freshnessburger.co.jp/images/menu/thumb/classic_burger.jpg?ver=220316_000357"
        className="h-[75px] md:h-[90px] lg:h-[120px] xl:h-[150px] 2xl:h-[180px] w-[100%]"
      />
      <div className="mx-auto w-[106px] md:w-[127px] lg:w-[169px] xl:w-[211px] 2xl:w-[253px] h-[48px] md:h-[58px] lg:h-[77px] xl:h-[97px] 2xl:h-[116px]"></div>
    </div>
  );
};
