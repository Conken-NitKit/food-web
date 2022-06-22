import { ReactNode } from "react";
import { MenuId } from ".";

export interface LayoutProps {
  type: MenuId;
  children: ReactNode;
}
