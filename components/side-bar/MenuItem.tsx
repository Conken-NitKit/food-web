import { useContext } from "react";
import Link from "next/link";

import { ChosenItemContext } from "./SideBar";

interface Props {
  href: string;
  name: string;
}

export const MenuItem = ({ href, name }: Props) => {
  const { chosenItem, setChosenItem } = useContext(ChosenItemContext);

  return (
    <li key={href}>
      <Link href={href}>
        <p>{name}</p>
      </Link>
    </li>
  );
};
