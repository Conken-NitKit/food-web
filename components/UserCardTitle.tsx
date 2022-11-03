import classNames from "classnames";

import { UserCardItemProps } from "../types";

interface Props extends UserCardItemProps {
  title: string;
}

export const UserCardTitle = ({ cardType, title }: Props): JSX.Element => {
  const isAddCardItem = cardType === "add-card";

  return (
    <p
      className={classNames(
        "text-primary-regular text-xs lg:text-base xl:text-xl 2xl:text-2xl",
        { "font-bold !leading-basic": !isAddCardItem }
      )}
    >
      {title}
    </p>
  );
};
