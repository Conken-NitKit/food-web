import { ReactNode } from "react";
import { PageId } from ".";

export interface LayoutProps {
  type: PageId;
  children: ReactNode;
}
