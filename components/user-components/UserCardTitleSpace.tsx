import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const UserCardTitleSpace = ({ children }: Props): JSX.Element => {
  return (
    <div className="ml-1 md:ml-1.5 lg:ml-2 xl:ml-2.5 2xl:ml-3">{children}</div>
  );
};
