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
    <div>
      <div className={classNames("rounded w-[58px] h-[18px]", bgcolor)}>
        <div className="flex justify-center items-center text-xs font-bold">
          {children}
        </div>
      </div>
    </div>
  );
};
