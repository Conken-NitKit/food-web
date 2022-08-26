import { PageId } from "../types";

interface MenuItems {
  id: PageId;
  name: string;
}

export const MENUS_ITEMS: Record<PageId, MenuItems> = {
  home: {
    id: "home",
    name: "ホーム",
  },
  menu: {
    id: "menu",
    name: "メニュー",
  },
  orders: {
    id: "orders",
    name: "注文状況",
  },
  sales: {
    id: "sales",
    name: "売上解析",
  },
  shift: {
    id: "shift",
    name: "シフト",
  },
  users: {
    id: "users",
    name: "ユーザー管理",
  },
  monitoring: {
    id: "monitoring",
    name: "モニタリング",
  },
  settings: {
    id: "settings",
    name: "設定",
  },
};
