import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import Link from "next/link";

import { ChosenContext } from "../../contexts";

interface Props {
  href: string;
  setChosen: Dispatch<SetStateAction<string>>;
  children: ReactNode;
  name: string;
}

export const MenuItem = ({ href, setChosen, children, name }: Props) => {
  return (
    <li
      key={href}
      onClick={() => {
        setChosen(href);
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
