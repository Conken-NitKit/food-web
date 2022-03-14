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

  const MENU = "menu";
  const ORDER = "order";
  const SALES = "Sales";
  const SHIFT = "shift";
  const USER = "user";
  const AUDIT = "audit";
  const SETTINGS = "settings";

  const icon = //hrefに対応したIconの選定
    href === "menu" ? (
      <MenuIcon chosenItem={chosenItem} />
    ) : href === "order" ? (
      <OrderIcon chosenItem={chosenItem} />
    ) : href === "sales" ? (
      <SalesIcon chosenItem={chosenItem} />
    ) : href === "shift" ? (
      <ShiftIcon chosenItem={chosenItem} />
    ) : href === "user" ? (
      <UserIcon chosenItem={chosenItem} />
    ) : href === "audit" ? (
      <AuditIcon chosenItem={chosenItem} />
    ) : href === "settings" ? (
      <SettingsIcon chosenItem={chosenItem} />
    ) : (
      <HomeIcon chosenItem={chosenItem} /> //対応するIconがなければHomeIconを表示
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
