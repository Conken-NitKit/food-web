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

interface Props {
  id: string;
  isChose: boolean;
}

export const Icon = ({ id, isChose }: Props) => {
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
