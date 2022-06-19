import { MenuId } from "../types";

interface MenuItems {
  id: MenuId;
  name: string;
}

export const MENUS_ITEMS: Record<MenuId, string> = {
  home: "ホーム",
  menu: "メニュー",
  monitoring: "注文状況",
  order: "売上解析",
  sales: "シフト",
  settings: "ユーザー",
  shift: "モニタリング",
  user: "設定",
};
