import type { NextPage } from "next";
import { FeatureLayout } from "../../../components/layouts";
import { useState } from "react";
import OperationCard from "../../../components/OperationCard";
import { operationCard } from "../../../types/operationCard";
import DropDown from "../../../components/DropDown";

const Monitoring: NextPage = () => {
  const operationCardJson = [
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

  const operationCardList = operationCardJson as operationCard[];
  const [userFilter, setUserFilter] = useState<string>("全て表示");
  const [typeFilter, setTypeFilter] = useState<string>("全て表示");

  const removeDuplicationValues = ([...array]) => {
    return array.filter((value, index, self) => self.indexOf(value) === index);
  };

  return (
    <FeatureLayout type="monitoring">
      <div>
        <div>
          システム運用者がシステムに対して実行した操作の履歴を見ることが出来ます。
        </div>
        <div className="flex mt-[57px]">
          <DropDown
            text="ユーザーでフィルタ"
            items={removeDuplicationValues(
              operationCardList.map((item) => item.user.name)
            )}
            setState={setUserFilter}
          />
          <div className="ml-[54px]">
            <DropDown
              text="操作内容でフィルタ"
              items={removeDuplicationValues(
                operationCardList.map((item) => item.type)
              )}
              setState={setTypeFilter}
            />
          </div>
        </div>
      </div>
      <div className="mt-[28px] space-y-3">
        {operationCardList
          .filter((item) =>
            userFilter === "全て表示" ? true : item.user.name === userFilter
          )
          .filter((item) =>
            typeFilter === "全て表示" ? true : item.type === typeFilter
          )
          .map((item) => {
            return (
              <div key={item.date}>
                <OperationCard operationCard={item} />
              </div>
            );
          })}
      </div>
    </FeatureLayout>
  );
};

export default Monitoring;
