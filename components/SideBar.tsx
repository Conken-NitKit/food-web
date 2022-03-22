import Link from "next/link";

import {
  MonitoringIcon,
  HomeIcon,
  MenuIcon,
  OrderIcon,
  SalesIcon,
  SettingsIcon,
  ShiftIcon,
  UserIcon,
} from "./icons";

interface Props {
  chosen: string;
}

export const SideBar = ({ chosen }: Props) => {
  const MENUS_ITEMS = [
    {
      href: "home",
      name: "ホーム",
    },
    {
      href: "menu",
      name: "メニュー",
    },
    {
      href: "order",
      name: "注文状況",
    },
    {
      href: "sales",
      name: "売上解析",
    },
    {
      href: "shift",
      name: "シフト",
    },
    {
      href: "user",
      name: "ユーザー",
    },
    {
      href: "monitoring",
      name: "モニタリング",
    },
    {
      href: "settings",
      name: "設定",
    },
  ];

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-m-f to-m-t">
      <p className="mb-13p font-bold text-1.8 text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        {MENUS_ITEMS.map((menuItemProps) => (
          <li
            key={menuItemProps.href}
            className={`pl-9p h-4w${
              menuItemProps.href === chosen && " rounded-l-1 bg-white"
            }`}
          >
            <Link href={menuItemProps.href}>
              <div
                className={`flex items-center h-4w text-1.25 font-bold ${
                  menuItemProps.href === chosen ? "text-m" : "text-white" //text-をスコープ外に出すとtailwind.configの更新時に色が反映されない不具合を確認しました。
                }`}
              >
                <div className="mr-6p w-2w h-1/2"></div>
                {menuItemProps.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
