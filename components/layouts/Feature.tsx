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
      <div className="px-[19px] md:px-[23px] lg:px-[31px] xl:px-[38px] 2xl:px-[46px] pb-0 w-full h-full">
        <h1 className="mb-[19px] md:mb-[23px] lg:mb-[31px] xl:mb-[38px] 2xl:mb-[46px] text-letter text-sm md:text-[17px] lg:text-[23px] xl:text-[29px] 2xl:text-[35px] font-bold leading-basic">
          {pageName}
        </h1>

        {children}
      </div>
    </BasicLayout>
  );
};
