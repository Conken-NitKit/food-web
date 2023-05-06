import classNames from "classnames";
import { PropsWithChildren } from "react";

interface Props {
  bgColor: string;
}

export const Badge = ({
  bgColor,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center text-xs font-bold rounded w-[58px] h-[18px]",
        bgColor
      )}
    >
      {children}
    </div>
  );
};
