import { Badge } from "./badge";

interface Props {
  badgeColor: string;
  badgeLabel: string;
  actionText: string;
  date: number;
}

export const ActionHistory = ({
  badgeColor,
  badgeLabel,
  actionText,
  date,
}: Props): JSX.Element => {
  return (
    <div>
      <div className="flex border  border-primary-regular rounded-[14px]  py-[10px] w-[1000px] h-[64px]">
        <div className=" rounded-full bg-thirdly-regular ml-[10px] w-[44px] h-[44px]"></div>
        <div className="ml-[10px]">
          <div className=" flex">
            <div className="mt-2px">
              <Badge bgcolor={badgeColor} label={badgeLabel} />
            </div>
            <div className="ml-[10px] text-xs font-bold">{actionText}</div>
          </div>
          <div className="text-xs text-secondary-regular mt-[3px]">{date}</div>
        </div>
      </div>
    </div>
  );
};
