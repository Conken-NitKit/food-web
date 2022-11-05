import type { NextPage } from "next";
import { FeatureLayout } from "../../../components/layouts";
import { useCallback, useMemo, useState } from "react";
import { MonitoringCard } from "../../../components/MonitoringCard";
import { MonitoringLog } from "../../../types/MonitoringLog";
import DropDown, { Item as DropDownItem } from "../../../components/DropDown";
import { removeDuplicationFromArray } from "../../../utils/array";

const MOCK_LOG: MonitoringLog[] = [
  {
    user: {
      name: "hirata",
    },
    type: "member",
    message: "平田を追加",
    date: 202209240859,
  },
  {
    user: {
      name: "hirata",
    },
    type: "member",
    message: "平田をメンバーから除外しました。バイバイ",
    date: 202209240900,
  },
  {
    user: {
      name: "kitashiro",
    },
    type: "member",
    message: "北代がjoin! やったね！",
    date: 202209240901,
  },
  {
    user: {
      name: "kitashiro",
    },
    type: "product",
    message: "北代がハンバーガー売ったらしい。がっぽり☆",
    date: 202209240902,
  },
];

interface Props {
  logs: MonitoringLog[];
}

const ALL = "全て表示";
const Monitoring: NextPage<Props> = ({ logs }) => {
  const [targetUser, setTargetUser] = useState<MonitoringLog["user"] | null>(
    null
  );
  const [targetType, setTargetType] = useState<MonitoringLog["type"] | null>(
    null
  );
  const selectableUserItems = useMemo<DropDownItem[]>(() => {
    const userItemsWithDuplicates = logs
      .map((log) => log.user.name)
      .map((name) => {
        return {
          id: name,
          label: name,
        };
      });
    const userItems = removeDuplicationFromArray(userItemsWithDuplicates);
    return userItems;
  }, [logs]);

  const selectableTypeItems = useMemo<DropDownItem[]>(() => {
    const typeItemsWithDuplicates = logs
      .map((log) => log.type)
      .map((type) => {
        return {
          id: type,
          label: type,
        };
      });
    const typeItems = removeDuplicationFromArray(typeItemsWithDuplicates);
    return typeItems;
  }, [logs]);

  const withAll = useCallback((items: DropDownItem[]) => {
    return [{ id: "all", label: ALL }, ...items];
  }, []);

  const handleUserFilterChange = useCallback(
    (item: DropDownItem) => {
      setSelectedUserId(item.id);
    },
    [selectableUserItems]
  );

  const handleTypeFilterChange = useCallback(
    (item: DropDownItem) => {
      setSelectedTypeId(item.id);
    },
    [selectableTypeItems]
  );

  return (
    <FeatureLayout type="monitoring">
      <div>
        <div>
          システム運用者がシステムに対して実行した操作の履歴を見ることが出来ます。
        </div>
        <div className="flex mt-[57px]">
          <DropDown
            label="ユーザーでフィルタ"
            items={withAll(selectableUserItems)}
            onChange={handleUserFilterChange}
          />
          <div className="ml-[54px]">
            <DropDown
              label="操作内容でフィルタ"
              items={withAll(selectableTypeItems)}
              onChange={handleTypeFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-[28px] space-y-3">
        {logs
          .filter(
            (log) => selectedUserId === ALL || log.user.name === selectedUserId
          )
          .filter(
            (log) => selectedTypeId === ALL || log.type === selectedTypeId
          )
          .map((log) => {
            return (
              <div key={log.date}>
                <MonitoringCard log={log} />
              </div>
            );
          })}
      </div>
    </FeatureLayout>
  );
};

export default Monitoring;

export const getServerSideProps = async () => {
  return {
    props: {
      logs: MOCK_LOG,
    },
  };
};
