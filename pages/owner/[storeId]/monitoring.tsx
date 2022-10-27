import type { NextPage } from "next";
import { FeatureLayout } from "../../../components/layouts";
import { useMemo, useState } from "react";
import { MonitoringCard } from "../../../components/MonitoringCard";
import { MonitoringLog } from "../../../types/MonitoringLog";
import DropDown, { Item as DropDownItem } from "../../../components/DropDown";
import { removeDuplicationValues } from "../../../utils/array";

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

const Monitoring: NextPage<Props> = ({ logs }) => {
  const [userFilter, setUserFilter] = useState<string>("全て表示");
  const [typeFilter, setTypeFilter] = useState<string>("全て表示");

  const handleUserFilterChange = (item: DropDownItem) => {
    setUserFilter(item.label);
  };
  const handleTypeFilterChange = (item: DropDownItem) => {
    setTypeFilter(item.label);
  };

  const selectableUserItems = useMemo<DropDownItem[]>(() => {
    return removeDuplicationValues(logs.map((log) => log.user.name)).map(
      (name) => {
        return {
          id: name,
          label: name,
        };
      }
    );
  }, [logs]);

  const selectableTypeItems = useMemo<DropDownItem[]>(() => {
    return removeDuplicationValues(logs.map((log) => log.type)).map(
      (logType) => {
        return {
          id: logType,
          label: logType,
        };
      }
    );
  }, [logs]);

  return (
    <FeatureLayout type="monitoring">
      <div>
        <div>
          システム運用者がシステムに対して実行した操作の履歴を見ることが出来ます。
        </div>
        <div className="flex mt-[57px]">
          <DropDown
            label="ユーザーでフィルタ"
            items={selectableUserItems}
            onChange={handleUserFilterChange}
          />
          <div className="ml-[54px]">
            <DropDown
              label="操作内容でフィルタ"
              items={selectableTypeItems}
              onChange={handleTypeFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-[28px] space-y-3">
        {logs
          .filter((item) =>
            userFilter === "全て表示" ? true : item.user.name === userFilter
          )
          .filter((item) =>
            typeFilter === "全て表示" ? true : item.type === typeFilter
          )
          .map((item) => {
            return (
              <div key={item.date}>
                <MonitoringCard log={item} />
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
