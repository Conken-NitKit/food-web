import { useState } from "react";

import { MenuItem } from ".";
import { ChosenItemContext } from "../../contexts";

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
          <MenuItem href="home" name="ホーム"></MenuItem>

          <MenuItem href="menu" name="メニュー"></MenuItem>

          <MenuItem href="order" name="注文状況"></MenuItem>

          <MenuItem href="sales" name="売上解析"></MenuItem>

          <MenuItem href="shift" name="シフト"></MenuItem>

          <MenuItem href="user" name="ユーザー管理"></MenuItem>

          <MenuItem href="audit" name="監査ログ"></MenuItem>

          <MenuItem href="settings" name="設定"></MenuItem>
        </ChosenItemContext.Provider>
      </ul>
    </div>
  );
};
