import Link from "next/link";
import classNames from "classnames";

import { LayoutProps } from "../../types";
import { MenuItemIcon } from "..";
import { MENUS_ITEMS } from "../../constants";

const MENU_BAR_W = 176;
const MENU_BAR_W_MD = 211;
const MENU_BAR_W_LG = 282;
const MENU_BAR_W_XL = 352;
const MENU_BAR_W_2XL = 422;

const menuBarWClass = "w-[" + MENU_BAR_W + "px]";
const menuBarWClassMd = "md:w-[" + MENU_BAR_W_MD + "px]";
const menuBarWClassLg = "lg:w-[" + MENU_BAR_W_LG + "px]";
const menuBarWClassXl = "xl:w-[" + MENU_BAR_W_XL + "px]";
const menuBarWClass2xl = "2xl:w-[" + MENU_BAR_W_2XL + "px]";

const mainWClass = "w-[calc(100%-" + MENU_BAR_W + "px)]";
const mainWClassMd = "md:w-[calc(100%-" + MENU_BAR_W_MD + "px)]";
const mainWClassLg = "lg:w-[calc(100%-" + MENU_BAR_W_LG + "px)]";
const mainWClassXl = "xl:w-[calc(100%-" + MENU_BAR_W_XL + "px)]";
const mainWClass2xl = "2xl:w-[calc(100%-" + MENU_BAR_W_2XL + "px)]";

export const BasicLayout: ({ type, children }: LayoutProps) => JSX.Element = ({
  type,
  children,
}) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-row-reverse w-[176px] md:w-[211px] lg:w-[282px] xl:w-[352px] 2xl:w-[422px] h-full">
        <div className="pl-[7%] w-[82%] h-full bg-gradient-to-b from-theme-start to-theme-end">
          <h2 className="my-[13%] text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] text-white font-bold leading-basic">
            コンピュータ研究部
          </h2>

          <ul>
            {Object.values(MENUS_ITEMS).map((menuItems) => (
              <li
                key={menuItems.id}
                className={classNames(
                  "mt-[7%] first:mt-0 h-[26px] md:h-[31px] lg:h-[41px] xl:h-[51px] 2xl:h-[61px] cursor-pointer",
                  {
                    "rounded-l-md md:rounded-l-lg lg:rounded-l-[10px] xl:rounded-l-[13px] 2xl:rounded-l-[15px] bg-white":
                      menuItems.id === type,
                  }
                )}
              >
                <Link href={menuItems.id}>
                  <div className="flex items-center pl-[9%] h-full">
                    <div className="w-[11%]">
                      <MenuItemIcon
                        id={menuItems.id}
                        isChoose={menuItems.id === type}
                      />
                    </div>

                    <p
                      className={classNames(
                        "ml-[6%] text-[8px] md:text-[10px] lg:text-[13px] xl:text-base 2xl:text-[19px] font-bold",
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

      <main
        className={classNames(
          "h-full",
          mainWClass,
          mainWClassMd,
          mainWClassLg,
          mainWClassXl,
          mainWClass2xl
        )}
      >
        {children}
      </main>
    </div>
  );
};
