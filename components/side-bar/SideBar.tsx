import { useState } from "react";

import { MenuItem } from ".";
import { ChosenContext } from "../../contexts";
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
  const [chosen, setChosen] = useState("home"); //選択中のMenuItemを保持

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="mb-13p font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul>
        <ChosenContext.Provider
          value={{ chosen: chosen, setChosen: setChosen }}
        >
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
            <AuditIcon item="audit" chosenItem={chosen} />
          </MenuItem>

          <MenuItem href="settings" setChosen={setChosen} name="設定">
            <SettingsIcon item="settings" chosenItem={chosen} />
          </MenuItem>
        </ChosenContext.Provider>
      </ul>
    </div>
  );
};
