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

const icons: Record<MenuId, (props: IconProps) => JSX.Element> = {};

interface Props {
  id: string;
  isChose: boolean;
}

export const Icon: NextPage<Props> = ({ id, isChose }) => {
  switch (id) {
    case "menu":
      return <MenuIcon isChose={isChose} />;
    case "monitoring":
      return <MonitoringIcon isChose={isChose} />;
    case "order":
      return <OrderIcon isChose={isChose} />;
    case "sales":
      return <SalesIcon isChose={isChose} />;
    case "settings":
      return <SettingsIcon isChose={isChose} />;
    case "shift":
      return <ShiftIcon isChose={isChose} />;
    case "user":
      return <UserIcon isChose={isChose} />;
    default:
      return <HomeIcon isChose={isChose} />;
  }
};
