import type { NextPage } from "next";

import { FeatureLayout } from "../components/layouts";
import { useState, useEffect } from "react";
import ActionHistory from "../components/ActionHistory";
import { useMultiFilter } from "../components/hooks/useMultiFilter";

type actionList = {
  user: {
    name: string;
  };
  type: string;
  message: string;
  date: number;
};

const Monitoring: NextPage = () => {
  const dataJson = [
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

  const data = dataJson as actionList[];
  const [isDropDownUser, setIsDropDownUser] = useState<boolean>(false);
  const [isDropDownType, setIsDropDownType] = useState<boolean>(false);
  const [userFilter, setUserFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [removedDuplicateUser, setRemovedDuplicateUser] = useState<string[]>(
    []
  );
  const [removedDuplicateType, setRemovedDuplicateType] = useState<string[]>(
    []
  );
  const [filteredTargets, changeFilter] = useMultiFilter(data, [
    (item) => (userFilter === "all" ? true : item.user.name === userFilter),
    (item) => (typeFilter === "all" ? true : item.type === typeFilter),
  ]);
  const removeDuplicationValues = ([...array]) => {
    return array.filter((value, index, self) => self.indexOf(value) === index);
  };

  return (
    <FeatureLayout type="monitoring">
      <div>
        システム運用者がシステムに対して実行した操作の履歴を見ることが出来ます。
      </div>
      <div className="mt-[55px] flex">
        <div className="opacity-[0.4]">ユーザーでフィルタ</div>
        <div className="ml-[10px]">
          <div className="flex">
            <div
              onClick={() => {
                isDropDownUser
                  ? setIsDropDownUser(false)
                  : setIsDropDownUser(true);
              }}
            >
              {userFilter}
            </div>
          </div>
          {isDropDownUser && (
            <div>
              <div
                onClick={() => {
                  setUserFilter("all");
                  isDropDownUser && setIsDropDownUser(false);
                  changeFilter(0);
                }}
              >
                all
              </div>
              {removeDuplicationValues(data.map((item) => item.user.name)).map(
                (item) => {
                  return (
                    <div
                      key={item}
                      onClick={() => {
                        setUserFilter(item);
                        changeFilter(0);
                        isDropDownUser && setIsDropDownUser(false);
                      }}
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
        <div className="opacity-[0.4]">操作内容でフィルタ</div>
        <div className="ml-[10px]">
          <div className="flex">
            <div
              onClick={() => {
                isDropDownType
                  ? setIsDropDownType(false)
                  : setIsDropDownType(true);
              }}
            >
              {typeFilter}
            </div>
          </div>
          {isDropDownType && (
            <div>
              <div
                onClick={() => {
                  setTypeFilter("all");
                  isDropDownType && setIsDropDownType(false);
                }}
              >
                all
              </div>
              {removeDuplicationValues(data.map((item) => item.type)).map(
                (item) => {
                  return (
                    <div
                      key={item}
                      onClick={() => {
                        setTypeFilter(item);
                        isDropDownType && setIsDropDownType(false);
                      }}
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        {filteredTargets.map((item, index) => {
          return (
            <div className="mt-[5px]" key={index}>
              <ActionHistory
                badgeColor="bg-monitoring-config"
                badgeLabel={item.type}
                actionText={item.message}
                date={item.date}
              />
            </div>
          );
        })}
      </div>
    </FeatureLayout>
  );
};

export default Monitoring;
