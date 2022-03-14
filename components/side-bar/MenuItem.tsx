import { useContext } from "react";
import Link from "next/link";

import { ChosenItemContext } from "./SideBar";
import {
  AuditIcon,
  HomeIcon,
  MenuIcon,
  OrderIcon,
  SalesIcon,
  SettingsIcon,
  ShiftIcon,
  UserIcon,
} from "./side-bar-icons";
import Home from "../../pages";

interface Props {
  href: string;
  name: string;
}

export const MenuItem = ({ href, name }: Props) => {
  const { chosenItem, setChosenItem } = useContext(ChosenItemContext);

  const icon =
    href === "menu" ? (
      <MenuIcon />
    ) : href === "order" ? (
      <OrderIcon />
    ) : href === "sales" ? (
      <SalesIcon />
    ) : href === "shift" ? (
      <ShiftIcon />
    ) : href === "user" ? (
      <UserIcon />
    ) : href === "audit" ? (
      <AuditIcon />
    ) : href === "settings" ? (
      <SettingsIcon />
    ) : (
      <HomeIcon /> //対応するIconがなければHomeIconを表示する
    );

  return (
    <li key={href}>
      <Link href={href}>
        <p>
          {icon}
          {name}
        </p>
      </Link>
    </li>
  );
};
