import type { NextPage } from "next";
import Badge from "./Badge";

interface Props {
  badgeColor: string;
  badgeLabel: string;
  actionText: string;
  date: string;
}

const ActionHistory = ({
  badgeColor,
  badgeLabel,
  actionText,
  date,
}: Props): JSX.Element => {
  return (
    <div>
      <div className="border w-[1000px] h-[64px] border-primary-regular rounded-[14px] flex py-[10px]">
        <div className="w-[44px] h-[44px] rounded-full bg-thirdly-regular ml-[10px] "></div>
        <div className="ml-[10px]">
          <div className=" flex">
            <div className="mt-2px">
              <Badge bgcolor={badgeColor} label={badgeLabel} />
            </div>
            <div className="ml-[10px] text-xs font-bold">{actionText}</div>
          </div>
          <div className="text-xs mt-[3px] text-secondary-regular">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ActionHistory;
