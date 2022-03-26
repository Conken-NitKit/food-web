import classNames from "classnames";
import Link from "next/link";
import { Icon } from ".";

const MENUS_ITEMS = [
  {
    id: "home",
    name: "ホーム",
  },
  {
    id: "menu",
    name: "メニュー",
  },
  {
    id: "order",
    name: "注文状況",
  },
  {
    id: "sales",
    name: "売上解析",
  },
  {
    id: "shift",
    name: "シフト",
  },
  {
    id: "user",
    name: "ユーザー",
  },
  {
    id: "monitoring",
    name: "モニタリング",
  },
  {
    id: "settings",
    name: "設定",
  },
];

interface Props {
  chosen: string;
}

export const Layout = ({ chosen }: Props) => {
  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-theme-start to-theme-end">
      <p className="mb-13p font-bold text-1.8 text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        {MENUS_ITEMS.map((menuItems) => (
          <li
            key={menuItems.id}
            className={classNames("mt-7p first:mt-0 pl-9p h-4w", {
              "rounded-l-1 bg-white": menuItems.id === chosen,
            })}
          >
            <Link href={menuItems.id}>
              <div
                className={classNames(
                  "flex items-center h-4w text-1.25 font-bold",
                  menuItems.id === chosen
                    ? "text-theme-sub text-theme"
                    : "text-white" //"text-"を演算から外すとtailwind.configの更新時にスタイルが反映されない不具合を確認しました。
                )}
              >
                <div className="mr-6p w-2w h-1/2">
                  <Icon id={menuItems.id} isChose={menuItems.id === chosen} />
                </div>
                {menuItems.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
