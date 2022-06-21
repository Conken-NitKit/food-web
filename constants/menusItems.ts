import { MenuId } from "../types";

interface MenuItems {
  id: MenuId;
  name: string;
}

export const MENUS_ITEMS: Record<MenuId, MenuItems> = {
  home: {
    id: "home",
    name: "ホーム",
  },
  menu: {
    id: "menu",
    name: "メニュー",
  },
  monitoring: {
    id: "orders",
    name: "注文状況",
  },
  orders: {
    id: "sales",
    name: "売上解析",
  },
  sales: {
    id: "shift",
    name: "シフト",
  },
  settings: {
    id: "users",
    name: "ユーザー",
  },
  shift: {
    id: "monitoring",
    name: "モニタリング",
  },
  users: {
    id: "settings",
    name: "設定",
  },
};
