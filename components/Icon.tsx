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
  chosen: string;
  isChose: boolean;
}

export const Icon = ({ chosen, isChose }: Props) => {
  switch (chosen) {
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
