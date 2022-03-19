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

export const SideBar = () => {
  const [chosen, setChosen] = useState("home"); //選択中のMenuItemを保持

  const menuItemsProps = [
    {
      href: "home",
      name: "ホーム",
      icon: <HomeIcon item="home" chosen={chosen} />,
    },
    {
      href: "menu",
      name: "メニュー",
      icon: <MenuIcon item="menu" chosen={chosen} />,
    },
    {
      href: "order",
      name: "注文状況",
      icon: <OrderIcon item="order" chosen={chosen} />,
    },
    {
      href: "sales",
      name: "売上解析",
      icon: <SalesIcon item="sales" chosen={chosen} />,
    },
    {
      href: "shift",
      name: "シフト",
      icon: <ShiftIcon item="shift" chosen={chosen} />,
    },
    {
      href: "user",
      name: "ユーザー",
      icon: <UserIcon item="user" chosen={chosen} />,
    },
    {
      href: "monitoring",
      name: "モニタリング",
      icon: <MonitoringIcon item="monitoring" chosen={chosen} />,
    },
    {
      href: "settings",
      name: "設定",
      icon: <SettingsIcon item="settings" chosen={chosen} />,
    },
  ];

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="mb-13p font-bold text-1.8w text-white leading-1.172">
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
              menuItemProps.href === chosen ? " rounded-l-1w bg-white" : ""
            }`}
          >
            <Link href={menuItemProps.href}>
              <p>
                {menuItemProps.icon}
                {menuItemProps.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};