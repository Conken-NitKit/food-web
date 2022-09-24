import classNames from "classnames";
import type { NextPage } from "next";

interface Props {
  bgcolor: string;
  text: string;
}

const Badge = ({ bgcolor, text }: Props): JSX.Element => {
  return (
    <div>
      <div className={classNames("w-[58px] h-[18px] rounded", bgcolor)}>
        <div className="text-xs flex justify-center items-center font-bold ">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Badge;
