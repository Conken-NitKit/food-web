import classNames from "classnames";
import { PropsWithChildren } from "react";

interface Props {
  bgcolor: string;
}

export const Badge = ({
  bgcolor,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center text-xs font-bold rounded w-[58px] h-[18px]",
        bgcolor
      )}
    >
      {children}
    </div>
  );
};
