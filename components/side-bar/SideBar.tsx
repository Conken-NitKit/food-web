import { useState } from "react";

import { MenuItem } from ".";
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
      icon: <HomeIcon item="home" chosenItem={chosen} />,
    },
    {
      href: "menu",
      name: "メニュー",
      icon: <MenuIcon item="menu" chosenItem={chosen} />,
    },
    {
      href: "order",
      name: "注文状況",
      icon: <OrderIcon item="order" chosenItem={chosen} />,
    },
    {
      href: "sales",
      name: "売上解析",
      icon: <SalesIcon item="sales" chosenItem={chosen} />,
    },
    {
      href: "shift",
      name: "シフト",
      icon: <ShiftIcon item="shift" chosenItem={chosen} />,
    },
    {
      href: "user",
      name: "ユーザー",
      icon: <UserIcon item="user" chosenItem={chosen} />,
    },
    {
      href: "monitoring",
      name: "モニタリング",
      icon: <MonitoringIcon item="audit" chosenItem={chosen} />,
    },
    {
      href: "settings",
      name: "設定",
      icon: <SettingsIcon item="settings" chosenItem={chosen} />,
    },
  ];

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="mb-13p font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        <MenuItem href="home" setChosen={setChosen} name="ホーム">
          <HomeIcon item="home" chosenItem={chosen} />
        </MenuItem>

        <MenuItem href="menu" setChosen={setChosen} name="メニュー">
          <MenuIcon item="menu" chosenItem={chosen} />
        </MenuItem>

        <MenuItem href="order" setChosen={setChosen} name="注文状況">
          <OrderIcon item="order" chosenItem={chosen} />
        </MenuItem>

        <MenuItem href="sales" setChosen={setChosen} name="売上解析">
          <SalesIcon item="sales" chosenItem={chosen} />
        </MenuItem>

        <MenuItem href="shift" setChosen={setChosen} name="シフト">
          <ShiftIcon item="shift" chosenItem={chosen} />
        </MenuItem>

        <MenuItem href="user" setChosen={setChosen} name="ユーザー管理">
          <UserIcon item="user" chosenItem={chosen} />
        </MenuItem>

        <MenuItem href="audit" setChosen={setChosen} name="監査ログ">
          <MonitoringIcon item="audit" chosenItem={chosen} />
        </MenuItem>

        <MenuItem href="settings" setChosen={setChosen} name="設定">
          <SettingsIcon item="settings" chosenItem={chosen} />
        </MenuItem>
      </ul>
    </div>
  );
};
