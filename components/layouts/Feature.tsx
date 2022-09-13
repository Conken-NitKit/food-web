import { LayoutProps } from "../../types";
import { MENUS_ITEMS } from "../../constants";
import { BasicLayout } from "./Basic";

export const FeatureLayout: ({
  type,
  children,
}: LayoutProps) => JSX.Element = ({ type, children }) => {
  const pageName: string = MENUS_ITEMS[type].name;

  return (
    <BasicLayout type={type}>
      <div className="p-[19px] md:p-[23px] lg:p-[31px] xl:p-[38px] 2xl:p-[46px] !pb-0 w-full h-full">
        <h1 className="mb-[19px] md:mb-[23px] lg:mb-[31px] xl:mb-[38px] 2xl:mb-[46px] h-[17px] md:h-5 lg:h-[27px] xl:h-[34px] 2xl:h-10 text-primary-regular text-sm md:text-[17px] lg:text-[23px] xl:text-[29px] 2xl:text-[35px] font-bold leading-[17px] md:leading-[20px] lg:leading-[27px] xl:leading-[34px] 2xl:leading-[40px]">
          {pageName}
        </h1>

        {children}
      </div>
    </BasicLayout>
  );
};
