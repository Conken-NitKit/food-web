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
} from "./icons";

const icons: Record<MenuId, (props: IconProps) => JSX.Element> = {
  home: (props) => <HomeIcon {...props} />,
  menu: (props) => <MenuIcon {...props} />,
  order: (props) => <OrderIcon {...props} />,
  sales: (props) => <SalesIcon {...props} />,
  shift: (props) => <ShiftIcon {...props} />,
  user: (props) => <UserIcon {...props} />,
  monitoring: (props) => <MonitoringIcon {...props} />,
  settings: (props) => <SettingsIcon {...props} />,
};

interface Props {
  id: MenuId;
  isChose: boolean;
}

export const Icon: NextPage<Props> = ({ id, isChose }) => {
  return icons[id]({ isChose: isChose });
};
