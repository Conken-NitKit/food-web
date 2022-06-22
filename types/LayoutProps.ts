import { ReactNode } from "react";
import { MenuId } from "./menuId";

export interface LayoutProps {
  type: MenuId;
  children: ReactNode;
}
