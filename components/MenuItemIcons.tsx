import { NextPage } from "next";

import { IconProps, MenuId } from "../types";
import {
  HomeIcon,
  MenuIcon,
  MonitoringIcon,
  OrderIcon,
  SalesIcon,
  SettingsIcon,
  ShiftIcon,
  UserIcon,
} from "./menu-icons";

const icons: Record<MenuId, (props: IconProps) => JSX.Element> = {
  home: (props) => <HomeIcon {...props} />,
  menu: (props) => <MenuIcon {...props} />,
  monitoring: (props) => <MonitoringIcon {...props} />,
  orders: (props) => <OrderIcon {...props} />,
  sales: (props) => <SalesIcon {...props} />,
  settings: (props) => <SettingsIcon {...props} />,
  shift: (props) => <ShiftIcon {...props} />,
  users: (props) => <UserIcon {...props} />,
};

interface Props {
  id: MenuId;
  isChose: boolean;
}

export const MenuItemIcon: NextPage<Props> = ({ id, isChose }) => {
  return icons[id]({ isChose: isChose });
};
