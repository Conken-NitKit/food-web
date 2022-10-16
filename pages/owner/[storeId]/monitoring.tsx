import type { NextPage } from "next";
import { FeatureLayout } from "../../../components/layouts";
import { useState } from "react";
import useEvent from "@react-hook/event";
import { ActionHistory } from "../../../components";

type actionList = {
  user: {
    name: string;
  };
  type: string;
  message: string;
  date: number;
};

const Monitoring: NextPage = () => {
  const actionHistoryJson = [
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

  const actionHistory = actionHistoryJson as actionList[];
  const [isDropDownUser, setIsDropDownUser] = useState<boolean>(false);
  const [isDropDownType, setIsDropDownType] = useState<boolean>(false);
  const [userFilter, setUserFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const removeDuplicationValues = ([...array]) => {
    return array.filter((value, index, self) => self.indexOf(value) === index);
  };
  const dropDownClose = () => {
    if (isDropDownUser) {
      setIsDropDownUser(false);
    }
    if (isDropDownType) {
      setIsDropDownType(false);
    }
  };
  useEvent(window, "click", dropDownClose);

  return (
    <FeatureLayout type="monitoring">
      <div>
        システム運用者がシステムに対して実行した操作の履歴を見ることが出来ます。
      </div>
      <div className="flex mt-[57px]">
        <div className="opacity-[0.4] ">ユーザーでフィルタ</div>
        <div className="ml-[10px]">
          <div className="flex w-[68px]">
            <div
              className="ml-[10px]"
              onClick={() => {
                setIsDropDownUser(true);
              }}
            >
              {userFilter}
            </div>
            <div
              onClick={() => {
                setIsDropDownUser(true);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 8.625L12 15.375L18.75 8.625"
                  stroke="#2D0D0D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {isDropDownUser && (
            <div className="absolute mt-[5px] z-10 rounded-2xl shadow-dropDown">
              <div className="w-[75px] h-[10px] bg-primary-regular rounded-t-2xl"></div>
              <div
                className="w-[75px] h-[20px] bg-primary-regular hover:bg-secondary-dark-regular"
                onClick={() => {
                  setUserFilter("all");
                }}
              >
                <div className="ml-[10px]">all</div>
              </div>
              {removeDuplicationValues(
                actionHistory.map((item) => item.user.name)
              ).map((item) => {
                return (
                  <div
                    className="w-[75px] h-[25px] bg-primary-regular hover:bg-secondary-dark-regular"
                    key={item}
                    onClick={() => {
                      setUserFilter(item);
                    }}
                  >
                    <div className="mx-[10px]">{item}</div>
                  </div>
                );
              })}
              <div className="w-[75px] h-[10px] bg-primary-regular rounded-b-2xl"></div>
            </div>
          )}
        </div>
        <div className="ml-[58px] opacity-[0.4]">操作内容でフィルタ</div>
        <div className="ml-[10px]">
          <div className="flex">
            <div
              className="ml-[10px]"
              onClick={() => {
                setIsDropDownType(true);
              }}
            >
              {typeFilter}
            </div>
            <div
              onClick={() => {
                setIsDropDownType(true);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 8.625L12 15.375L18.75 8.625"
                  stroke="#2D0D0D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {isDropDownType && (
            <div className="absolute mt-[5px] z-10 rounded-2xl shadow-dropDown">
              <div className="w-[75px] h-[10px] bg-primary-regular rounded-t-2xl"></div>
              <div
                className=" w-[75px] h-[20px] bg-primary-regular hover:bg-secondary-dark-regular"
                onClick={() => {
                  setTypeFilter("all");
                }}
              >
                <div className="ml-[10px]">all</div>
              </div>
              {removeDuplicationValues(
                actionHistory.map((item) => item.type)
              ).map((item) => {
                return (
                  <div
                    className="w-[75px] h-[25px] bg-primary-regular hover:bg-secondary-dark-regular"
                    key={item}
                    onClick={() => {
                      setTypeFilter(item);
                    }}
                  >
                    <div className="mx-[10px]">{item}</div>
                  </div>
                );
              })}
              <div className="w-[75px] h-[10px] bg-primary-regular rounded-b-2xl "></div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[28px] space-y-3">
        {actionHistory
          .filter((item) =>
            userFilter === "all" ? true : item.user.name === userFilter
          )
          .filter((item) =>
            typeFilter === "all" ? true : item.type === typeFilter
          )
          .map((item) => {
            return (
              <div key={item.date}>
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
