import { useState } from "react";

import { MenuItem } from ".";
import { ChosenItemContext } from "../../contexts";
import {
  AuditIcon,
  HomeIcon,
  MenuIcon,
  OrderIcon,
  SalesIcon,
  SettingsIcon,
  ShiftIcon,
  UserIcon,
} from "./menu-item-icons";

export const SideBar = () => {
  const [chosenItem, setChosenItem] = useState("home"); //選択中のMenuItemを保持

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="mb-13p font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        <ChosenItemContext.Provider
          value={{ chosenItem: chosenItem, setChosenItem: setChosenItem }}
        >
          <MenuItem href="home" name="ホーム">
            <HomeIcon item="home" chosenItem={chosenItem} />
          </MenuItem>

          <MenuItem href="menu" name="メニュー">
            <MenuIcon item="home" chosenItem={chosenItem} />
          </MenuItem>

          <MenuItem href="order" name="注文状況">
            <OrderIcon item="home" chosenItem={chosenItem} />
          </MenuItem>

          <MenuItem href="sales" name="売上解析">
            <SalesIcon item="home" chosenItem={chosenItem} />
          </MenuItem>

          <MenuItem href="shift" name="シフト">
            <ShiftIcon item="home" chosenItem={chosenItem} />
          </MenuItem>

          <MenuItem href="user" name="ユーザー管理">
            <UserIcon item="home" chosenItem={chosenItem} />
          </MenuItem>

          <MenuItem href="audit" name="監査ログ">
            <AuditIcon item="home" chosenItem={chosenItem} />
          </MenuItem>

          <MenuItem href="settings" name="設定">
            <SettingsIcon item="home" chosenItem={chosenItem} />
          </MenuItem>
        </ChosenItemContext.Provider>
      </ul>
    </div>
  );
};
