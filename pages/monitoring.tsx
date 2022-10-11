import type { NextPage } from "next";
import { FeatureLayout } from "../components/layouts";
import { useState } from "react";
import ActionHistory from "../components/ActionHistory";

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

  const removeDuplicationValues = ([...array]) => {
    return array.filter((value, index, self) => self.indexOf(value) === index);
  };

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
              onClick={() => {
                isDropDownUser
                  ? setIsDropDownUser(false)
                  : setIsDropDownUser(true);
              }}
            >
              {userFilter}
            </div>
            <div
              onClick={() => {
                isDropDownUser
                  ? setIsDropDownUser(false)
                  : setIsDropDownUser(true);
              }}
              className="w-[10px] h-[10px] border-[2px] border-t-[transparent] border-r-[transparent] border-b-[#565656] border-l-[#565656] -rotate-45 ml-[10px] mt-[3px]"
            ></div>
          </div>
          {isDropDownUser && (
            <div className="z-10 absolute">
              <div
                className="w-[70px] h-[20px] mt-[5px] bg-white-a95"
                onClick={() => {
                  setUserFilter("all");
                  isDropDownUser && setIsDropDownUser(false);
                }}
              >
                all
              </div>
              {removeDuplicationValues(data.map((item) => item.user.name)).map(
                (item) => {
                  return (
                    <div
                      className="w-[70px] h-[20px] mt-[5px]"
                      key={item}
                      onClick={() => {
                        setUserFilter(item);
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
        <div className="ml-[58px] opacity-[0.4]">操作内容でフィルタ</div>
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
            <div
              onClick={() => {
                isDropDownType
                  ? setIsDropDownType(false)
                  : setIsDropDownType(true);
              }}
              className="w-[10px] h-[10px] border-[2px] border-t-[transparent] border-r-[transparent] border-b-[#565656] border-l-[#565656] -rotate-45 ml-[10px] mt-[3px]"
            ></div>
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
      <div className="mt-[28px] space-y-3">
        {data
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
