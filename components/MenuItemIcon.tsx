import { IconProps, PageId } from "../types";
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

const icons: Record<PageId, (props: IconProps) => JSX.Element> = {
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
  id: PageId;
  isChoose: boolean;
}

export const MenuItemIcon: ({ id, isChoose }: Props) => JSX.Element = ({
  id,
  isChoose,
}) => {
  return icons[id]({ isChoose });
};
