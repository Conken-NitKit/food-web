import Link from "next/link";
import classNames from "classnames";

import { LayoutProps } from "../../types";
import { MenuItemIcon } from "..";
import { MENUS_ITEMS } from "../../constants";
import { useRouter } from "next/router";

export const BasicLayout: ({ type, children }: LayoutProps) => JSX.Element = ({
  type,
  children,
}) => {
  const router = useRouter();

  // TODO: フォールバックで "XXX" を入れているが、バックエンドが完成したら受け取らないようにする。
  const { storeId = "XXX" } = router.query;

  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-row-reverse w-[176px] md:w-[211px] lg:w-[282px] xl:w-[352px] 2xl:w-[422px] h-full">
        {/* note: 上のdivのwidthの値を変更する場合、<main>のwidthの値も変更すること。*/}
        <div className="pl-[7%] w-[82%] h-full bg-accent-gradient-primary">
          <h2 className="my-[13%] text-[11px] md:text-[13px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] text-primary-inverted font-bold leading-basic">
            コンピュータ研究部
          </h2>

          <ul>
            {Object.values(MENUS_ITEMS).map((menuItems) => (
              <li
                key={menuItems.id}
                className={classNames(
                  "mt-[7%] first:mt-0 h-[26px] md:h-[31px] lg:h-[41px] xl:h-[51px] 2xl:h-[61px] cursor-pointer",
                  {
                    "rounded-l-md md:rounded-l-lg lg:rounded-l-[10px] xl:rounded-l-[13px] 2xl:rounded-l-[15px] bg-primary-regular":
                      menuItems.id === type,
                  }
                )}
              >
                <Link
                  href={{
                    pathname: `/owner/[storeId]/${menuItems.id}`,
                    query: { storeId },
                  }}
                >
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
                          ? "text-tertiary-regular text-theme"
                          : "text-primary-inverted"
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

      <main className="w-[calc(100%-176px)] md:w-[calc(100%-211px)] lg:w-[calc(100%-282px)] xl:w-[calc(100%-352px)] 2xl:w-[calc(100%-422px)] h-full">
        {/* note: <main className = "w-[calc(100%-n px)]… n: メニューバースペースのdivのwidth */}
        {children}
      </main>
    </div>
  );
};
