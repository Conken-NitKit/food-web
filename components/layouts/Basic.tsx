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
      <div className="flex flex-row-reverse w-[211px] lg:w-[282px] xl:w-[352px] 2xl:w-[422px] h-full">
        <div className="pl-[7%] w-[82%] h-full bg-gradient-to-b from-theme-start to-theme-end">
          <h2 className="my-[13%] text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] text-white font-bold leading-basic">
            コンピュータ研究部
          </h2>
          <ul>
            {Object.values(MENUS_ITEMS).map((menuItems) => (
              <li
                key={menuItems.id}
                className={classNames(
                  "mt-[7%] first:mt-0 h-[31px] lg:h-[41px] xl:h-[51px] 2xl:h-[61px] cursor-pointer",
                  {
                    "rounded-l-2xl bg-white": menuItems.id === type,
                  }
                )}
              >
                <Link href={menuItems.id}>
                  <div className="flex items-center pl-[9%] h-full">
                    <div className="w-[11%]">
                      <MenuItemIcon
                        id={menuItems.id}
                        isChose={menuItems.id === type}
                      />
                    </div>

                    <p
                      className={classNames(
                        "ml-[6%] text-xl font-bold",
                        menuItems.id === type
                          ? "text-theme-sub text-theme"
                          : "text-white"
                      )}
                    >
                      {menuItems.name}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-[calc(100%-440px)] h-full">{children}</div>
    </div>
  );
};
