import { Badge } from "./Badge";
import { MonitoringLog } from "../types/MonitoringLog";
interface Props {
  log: MonitoringLog;
}

export const MonitoringCard = ({ log }: Props): JSX.Element => {
  const badgeColor = (type: string) => {
    switch (type) {
      case "member":
        return "bg-monitoring-member";
      case "product":
        return "bg-monitoring-product";
      case "config":
        return "bg-monitoring-config";
      default:
        return "error";
    }
  };
  return (
    <div>
      <div className="flex border  border-primary-regular rounded-[14px]  py-[10px] w-[1000px] h-[64px]">
        <div className=" rounded-full bg-thirdly-regular ml-[10px] w-[44px] h-[44px]"></div>
        <div className="ml-[10px]">
          <div className=" flex">
            <div className="mt-2px">
              <Badge bgcolor={badgeColor(log.type)} label={log.type} />
            </div>
            <div className="ml-[10px] text-xs font-bold">{log.message}</div>
          </div>
          <div className="text-xs text-secondary-regular mt-[3px]">
            {log.date}
          </div>
        </div>
      </div>
    </div>
  );
};
