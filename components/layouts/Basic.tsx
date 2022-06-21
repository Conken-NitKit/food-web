import { ReactNode } from "react";
import { NextPage } from "next";
import Link from "next/link";
import classNames from "classnames";

import { MenuItemIcon } from "../menu-bar-icons";
import { MENUS_ITEMS } from "../../constants";
import { MenuId } from "../../types";

interface Props {
  type: MenuId;
  children: ReactNode;
}

export const BasicLayout: NextPage<Props> = ({ type, children }) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-theme-start to-theme-end">
        <h2 className="mb-13p font-bold text-1.8 text-white leading-1.172">
          コンピュータ研究部
        </h2>
        <ul>
          {Object.values(MENUS_ITEMS).map((menuItems) => (
            <li
              key={menuItems.id}
              className={classNames(
                "mt-7p first:mt-0 pl-9p h-4w cursor-pointer",
                {
                  "rounded-l-1 bg-white": menuItems.id === type,
                }
              )}
            >
              <Link href={menuItems.id}>
                <div
                  className={classNames(
                    "flex items-center h-4w text-1.25 font-bold",
                    menuItems.id === type
                      ? "text-theme-sub text-theme"
                      : "text-white" //"error: text-"を条件式の外に出すとtailwind.configの更新時にスタイルが反映されない不具合を確認しました。
                  )}
                >
                  <div className="mr-6p w-2w h-1/2">
                    <MenuItemIcon
                      id={menuItems.id}
                      isChose={menuItems.id === type}
                    />
                  </div>
                  {menuItems.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-72p h-full">{children}</div>
    </div>
  );
};
