import { ReactNode } from "react";

import { MenuId } from "../../types";
import { MENUS_ITEMS } from "../../constants";
import { BasicLayout } from "./Basic";

interface Props {
  type: MenuId;
  children: ReactNode;
}

export const FeatureLayout: ({ type, children }: Props) => JSX.Element = ({
  type,
  children,
}) => {
  const pageName: string = MENUS_ITEMS[type].name;

  return (
    <BasicLayout type={type}>
      <div className="p-5p pb-0 w-full h-full">
        <h1 className="mb-4p text-2.25 font-bold leading-1.172 text-letter">
          {pageName}
        </h1>

        {children}
      </div>
    </BasicLayout>
  );
};
