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
      <div className="px-5p pt-4h w-full h-full">
        <h1 className="mb-4h text-3h font-bold leading-1.172 text-letter">
          {pageName}
        </h1>

        {children}
      </div>
    </BasicLayout>
  );
};
