import { useContext } from "react";
import Link from "next/link";

import { ChosenItemContext } from "./SideBar";

interface Props {
  href: string;
  icon: () => JSX.Element;
  name: string;
}

export const MenuItem = ({ href, icon, name }: Props) => {
  const { chosenItem, setChosenItem } = useContext(ChosenItemContext);

  return (
    <li key={href}>
      <Link href={href}>
        {icon}
        <p>{name}</p>
      </Link>
    </li>
  );
};
