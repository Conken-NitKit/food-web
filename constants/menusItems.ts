import { MenuId } from "../types";

interface MenuItems {
  id: MenuId;
  name: string;
}

export const menusItems: MenuItems[] = [
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
