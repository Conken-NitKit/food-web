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
      <div className="p-[19px] md:p-[23px] lg:p-[31px] xl:p-[38px] 2xl:p-[46px] pb-0 w-full h-full">
        <h1 className="mb-12 text-letter text-4xl font-bold leading-basic">
          {pageName}
        </h1>

        {children}
      </div>
    </BasicLayout>
  );
};
