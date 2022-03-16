import { ReactNode, useContext } from "react";
import Link from "next/link";

import { ChosenItemContext } from "../../contexts";

interface Props {
  href: string;
  children: ReactNode;
  name: string;
}

export const MenuItem = ({ href, children, name }: Props) => {
  const { chosenItem, setChosenItem } = useContext(ChosenItemContext);

  return (
    <li
      key={href}
      onClick={() => {
        setChosenItem(href);
      }}
    >
      <Link href={href}>
        <p>
          {children}
          {name}
        </p>
      </Link>
    </li>
  );
};
