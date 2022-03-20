import Link from "next/link";
import { useState } from "react";

import {
  MonitoringIcon,
  HomeIcon,
  MenuIcon,
  OrderIcon,
  SalesIcon,
  SettingsIcon,
  ShiftIcon,
  UserIcon,
} from "./menu-item-icons";

interface Props {
  chosen: string;
}

export const SideBar = () => {
  const [chosen, setChosen] = useState("home"); //選択中のMenuItemを保持

  const menuItemsProps = [
    {
      href: "Home",
      name: "ホーム",
      icon: <HomeIcon chosen={chosen} />,
    },
    {
      href: "Menu",
      name: "メニュー",
      icon: <MenuIcon chosen={chosen} />,
    },
    {
      href: "Order",
      name: "注文状況",
      icon: <OrderIcon chosen={chosen} />,
    },
    {
      href: "Sales",
      name: "売上解析",
      icon: <SalesIcon chosen={chosen} />,
    },
    {
      href: "Shift",
      name: "シフト",
      icon: <ShiftIcon chosen={chosen} />,
    },
    {
      href: "User",
      name: "ユーザー",
      icon: <UserIcon chosen={chosen} />,
    },
    {
      href: "Monitoring",
      name: "モニタリング",
      icon: <MonitoringIcon chosen={chosen} />,
    },
    {
      href: "Settings",
      name: "設定",
      icon: <SettingsIcon chosen={chosen} />,
    },
  ];

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-m-f to-m-t">
      <p className="mb-13p font-bold text-1.8 text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        {menuItemsProps.map((menuItemProps) => (
          <li
            key={menuItemProps.href}
            onClick={() => {
              setChosen(menuItemProps.href);
            }}
            className={`pl-9p h-4w${
              menuItemProps.href === chosen && " rounded-l-1 bg-white"
            }`}
          >
            <Link href={menuItemProps.href}>
              <div
                className={`flex items-center h-4w text-1.25 ${
                  menuItemProps.href === chosen ? "text-m" : "text-white" //text-をスコープ外に出すとtailwind.configの更新時に色が反映されない不具合を確認しました。
                }`}
              >
                <div className="mr-6p w-2w h-1/2">{menuItemProps.icon}</div>
                {menuItemProps.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
