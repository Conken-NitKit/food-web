import { ReactNode } from "react";
import { NextPage } from "next";

import { MenuId } from "../../types";
import { MENUS_ITEMS } from "../../constants";
import { BasicLayout } from "./Basic";

interface Props {
  type: MenuId;
  children: ReactNode;
}

export const FeatureLayout: NextPage<Props> = ({ type, children }) => {
  const pageName: string = MENUS_ITEMS[type].name;

  return (
    <>
      {MENUS_ITEMS.map(
        (menuItems) =>
          menuItems.id === type && (
            <BasicLayout type={type} key={type}>
              <div className="p-5p pb-0 w-full h-full">
                <h1 className="mb-4p text-2.25 font-bold leading-1.172 text-letter">
                  {menuItems.name}
                </h1>

                {children}
              </div>
            </BasicLayout>
          )
      )}
    </>
  );
};
