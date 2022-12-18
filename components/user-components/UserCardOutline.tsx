import { ReactNode } from "react";
import classNames from "classnames";

import { UserCardItemProps } from "../../types";

interface Props extends UserCardItemProps {
  children: ReactNode;
}

export const UserCardOutline = ({ cardType, children }: Props): JSX.Element => {
  const isAddCardItem = cardType === "add-card";

  return (
    <div
      className={classNames(
        "flex items-center w-full h-9 md:h-11 lg:h-14 xl:h-[70px] 2xl:h-[84px]",
        { "border-t border-secondary-regular": !isAddCardItem }
      )}
    >
      {children}
    </div>
  );
};
