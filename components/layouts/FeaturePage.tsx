import { ReactNode } from "react";

import { BasicLayout } from "./Basic";
import { MENUS_ITEMS } from "../../constants";

interface Props {
  type: string;
  children: ReactNode;
}

export const FeaturePageLayout = ({ type, children }: Props) => {
  return (
    <>
      {MENUS_ITEMS.map(
        (menuItems) =>
          menuItems.id === type && (
            <BasicLayout type={type} key={type}>
              <div className="p-5p pb-0 w-full h-full">
                <p className="mb-4p text-2.25 font-bold leading-1.172 text-letter">
                  {menuItems.name}
                </p>
              </div>
            </BasicLayout>
          )
      )}
    </>
  );
};
