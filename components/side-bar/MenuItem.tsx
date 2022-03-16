import { ReactNode, useContext } from "react";
import Link from "next/link";

import { ChosenContext } from "../../contexts";

interface Props {
  href: string;
  children: ReactNode;
  name: string;
}

export const MenuItem = ({ href, children, name }: Props) => {
  const { chosen, setChosen } = useContext(ChosenContext);

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
