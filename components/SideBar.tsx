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

export const SideBar = ({ chosen }: Props) => {
  return (
    <div className="pt-13p pl-9p w-full h-full bg-gradient-to-t from-theme-f to-theme-t">
      <p className="mb-13p font-bold text-1.8 text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        {MENUS_ITEMS.map((menuItems) => (
          <li
            key={menuItems.id}
            className={`pl-9p h-4w${
              menuItems.id === chosen && " rounded-l-1 bg-white"
            }`}
          >
            <Link href={menuItems.id}>
              <div
                className={`flex items-center h-4w text-1.25 font-bold ${
                  menuItems.id === chosen ? "text-theme" : "text-white" //text-をスコープ外に出すとtailwind.configの更新時に色が反映されない不具合を確認しました。
                }`}
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
