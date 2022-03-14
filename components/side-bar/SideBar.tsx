import { createContext, Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

import { MenuItem } from ".";

export const SideBar = () => {
  const [chosenItem, setChosenItem] = useState("home");

  const ChosenItemContext = createContext<{
    chosenItem: string;
    setChosenItem: Dispatch<SetStateAction<string>>;
  }>({ chosenItem: "", setChosenItem: () => {} });

  return (
    <div className="ml-5p pt-3p pl-2p w-23p h-full bg-gradient-to-t from-co-m-f to-co-m-t">
      <p className="font-bold text-1.8w text-white leading-1.172">
        コンピュータ研究部
      </p>
      <ul className="mt-13p">
        <ChosenItemContext.Provider
          value={{ chosenItem: chosenItem, setChosenItem: setChosenItem }}
        >
          <MenuItem href="home" name="ホーム" />

          <MenuItem href="menu" name="メニュー" />

          <MenuItem href="order" name="注文状況" />

          <MenuItem href="sales" name="売上解析" />

          <MenuItem href="shift" name="シフト" />

          <MenuItem href="user" name="ユーザー管理" />

          <MenuItem href="audit" name="監査ログ" />

          <MenuItem href="settings" name="設定" />
        </ChosenItemContext.Provider>
      </ul>
    </div>
  );
};
