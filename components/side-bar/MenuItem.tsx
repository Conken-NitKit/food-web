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
} from "./menu-item-icons";

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
    href === MENU ? (
      <MenuIcon chosenItem={chosenItem} />
    ) : href === ORDER ? (
      <OrderIcon chosenItem={chosenItem} />
    ) : href === SALES ? (
      <SalesIcon chosenItem={chosenItem} />
    ) : href === SHIFT ? (
      <ShiftIcon chosenItem={chosenItem} />
    ) : href === USER ? (
      <UserIcon chosenItem={chosenItem} />
    ) : href === AUDIT ? (
      <AuditIcon chosenItem={chosenItem} />
    ) : href === SETTINGS ? (
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
