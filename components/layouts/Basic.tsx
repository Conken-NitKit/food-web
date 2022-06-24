import Link from "next/link";
import classNames from "classnames";

import { LayoutProps } from "../../types";
import { MenuItemIcon } from "..";
import { MENUS_ITEMS } from "../../constants";

export const BasicLayout: ({ type, children }: LayoutProps) => JSX.Element = ({
  type,
  children,
}) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="ml-5p pt-4h pl-2p w-23p h-full bg-gradient-to-t from-theme-start to-theme-end">
        <h2 className="mb-4h font-bold text-2.3h text-white leading-1.17">
          コンピュータ研究部
        </h2>
        <ul>
          {Object.values(MENUS_ITEMS).map((menuItems) => (
            <li
              key={menuItems.id}
              className={classNames("mt-2h first:mt-0 h-4w cursor-pointer", {
                "rounded-l-1h bg-white": menuItems.id === type,
              })}
            >
              <Link href={menuItems.id}>
                <div
                  className={classNames(
                    "flex items-center pl-9p h-full text-1.6h font-bold",
                    menuItems.id === type
                      ? "text-theme-sub text-theme"
                      : "text-white"
                  )}
                >
                  <div className="mr-6p w-2w h-1/2">
                    <MenuItemIcon
                      id={menuItems.id}
                      isChose={menuItems.id === type}
                    />
                  </div>

                  <p>{menuItems.name}</p>
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
