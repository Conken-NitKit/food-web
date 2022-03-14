import { useContext } from "react";
import Link from "next/link";

import { ChosenItemContext } from "../../contexts";
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

interface Props {
  href: string;
  name: string;
}

export const MenuItem = ({ href, name }: Props) => {
  const { chosenItem, setChosenItem } = useContext(ChosenItemContext);

  const icon = //hrefに対応したIconの選定
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
      <HomeIcon /> //対応するIconがなければHomeIconを表示
    );

  return (
    <li
      key={href}
      onClick={() => {
        setChosenItem(href);
      }}
    >
      <Link href={href}>
        <p>
          {icon}
          {name}
        </p>
      </Link>
    </li>
  );
};
