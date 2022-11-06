import { Badge } from "./Badge";
import { MonitoringLog } from "../types/MonitoringLog";
import { formatJpTimestamp } from "../utils/date";

interface Props {
  log: MonitoringLog;
}

const BADGE_COLORS: Record<MonitoringLog["type"], string> = {
  member: "bg-monitoring-member",
  product: "bg-monitoring-product",
  order: "bg-monitoring-order",
};

export const MonitoringCard = ({ log }: Props): JSX.Element => {
  return (
    <div className="flex border border-primary-regular rounded-[14px] py-[10px] w-[1000px] h-[64px]">
      <div className="rounded-full bg-thirdly-regular ml-[10px] w-[44px] h-[44px]">
        {/* 画像貼る予定 */}
      </div>
      <div className="ml-[10px]">
        <div className="flex">
          <Badge bgColor={BADGE_COLORS[log.type]}>{log.type}</Badge>
          <div className="ml-[10px] text-xs font-bold">{log.message}</div>
        </div>
        <div className="text-xs text-secondary-regular mt-[3px]">
          {formatJpTimestamp(log.timestamp, "MEDIUM")}
        </div>
      </div>
    </div>
  );
};
