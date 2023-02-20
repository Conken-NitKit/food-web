import { PageId } from "../types";

interface MenuItems {
  id: PageId;
  path: string;
  name: string;
}

export const MENUS_ITEMS: Record<PageId, MenuItems> = {
  home: {
    id: "home",
    path: "",
    name: "ホーム",
  },
  menu: {
    id: "menu",
    path: "menu",
    name: "メニュー",
  },
  orders: {
    id: "orders",
    path: "orders",
    name: "注文状況",
  },
  sales: {
    id: "sales",
    path: "sales",
    name: "売上解析",
  },
  shift: {
    id: "shift",
    path: "shift",
    name: "シフト",
  },
  users: {
    id: "users",
    path: "users",
    name: "ユーザー管理",
  },
  monitoring: {
    id: "monitoring",
    path: "monitoring",
    name: "モニタリング",
  },
  settings: {
    id: "settings",
    path: "settings",
    name: "設定",
  },
};
