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
      name: "うみてる",
      userId: "umiteru",
      accountId: "umiteru",
    },
    type: "member",
    message: "うみてるを追加",
    date: 202209240859,
  },
  {
    user: {
      name: "うみてる",
      userId: "umiteru",
      accountId: "umiteru",
    },
    type: "member",
    message: "うみてるをメンバーから除外しました。バイバイ",
    date: 202209240900,
  },
  {
    user: {
      name: "きーた",
      userId: "qiita",
      accountId: "qiita",
    },
    type: "member",
    message: "きーたがjoin! やったね！",
    date: 202209240901,
  },
  {
    user: {
      name: "きーた",
      userId: "qiita",
      accountId: "qiita",
    },
    type: "product",
    message: "きーたがハンバーガー売ったらしい。がっぽり☆",
    date: 202209240902,
  },
];

interface Props {
  logs: MonitoringLog[];
}

const ITEM_TO_UNSELECT = { id: "all", label: "全て表示" };

const Monitoring: NextPage<Props> = ({ logs }) => {
  const [targetUserItem, setTargetUserItem] = useState<DropDownItem | null>(
    null
  );
  const [targetTypeItem, setTargetTypeItem] = useState<DropDownItem | null>(
    null
  );

  const selectableUserItems = useMemo<DropDownItem[]>(() => {
    const userItemsWithDuplicates = logs
      .map((log) => log.user)
      .map((user) => {
        return {
          id: user.userId,
          label: user.name,
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

  const displayLogs = useMemo<MonitoringLog[]>(() => {
    return logs
      .filter((log) => !targetUserItem || targetUserItem.id === log.user.userId)
      .filter((log) => !targetTypeItem || targetTypeItem.id === log.type);
  }, [logs]);

  const withUnselect = useCallback((items: DropDownItem[]) => {
    return [ITEM_TO_UNSELECT, ...items];
  }, []);

  const handleUserFilterChange = useCallback(
    (item: DropDownItem) => {
      setTargetUserItem(item.id === ITEM_TO_UNSELECT.id ? null : item);
      console.log(item);
    },
    [targetUserItem]
  );

  const handleTypeFilterChange = useCallback(
    (item: DropDownItem) => {
      setTargetTypeItem(item.id === ITEM_TO_UNSELECT.id ? null : item);
    },
    [targetTypeItem]
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
            items={withUnselect(selectableUserItems)}
            onChange={handleUserFilterChange}
          />
          <div className="ml-[54px]">
            <DropDown
              label="操作内容でフィルタ"
              items={withUnselect(selectableTypeItems)}
              onChange={handleTypeFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-[28px] space-y-3">
        {displayLogs.map((log) => {
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
