import { createContext, Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

import { MenuItem } from ".";
import {
  AuditIcon,
  HomeIcon,
  MenuIcon,
  OrderIcon,
  SalesIcon,
  SettingsIcon,
  ShiftIcon,
  UserIcon,
} from "./side-bar-icons";

export const ChosenItemContext = createContext<{
  chosenItem: string;
  setChosenItem: Dispatch<SetStateAction<string>>;
}>({ chosenItem: "", setChosenItem: () => {} });

export const SideBar = () => {
  const [chosenItem, setChosenItem] = useState("home");

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul className="mt-13p">
        <ChosenItemContext.Provider
          value={{ chosenItem: chosenItem, setChosenItem: setChosenItem }}
        >
          <MenuItem href="home" icon={HomeIcon} name="ホーム" />

          <MenuItem href="menu" icon={MenuIcon} name="メニュー" />

          <MenuItem href="order" icon={OrderIcon} name="注文状況" />

          <MenuItem href="sales" icon={SalesIcon} name="売上解析" />

          <MenuItem href="shift" icon={ShiftIcon} name="シフト" />

          <MenuItem href="user" icon={UserIcon} name="ユーザー管理" />

          <MenuItem href="audit" icon={AuditIcon} name="監査ログ" />

          <MenuItem href="settings" icon={SettingsIcon} name="設定" />
        </ChosenItemContext.Provider>
      </ul>
    </div>
  );
};
