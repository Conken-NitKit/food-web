import type { NextPage } from "next";

import { FeatureLayout } from "../components/layouts";
import { useState, useEffect } from "react";
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
        name: "kitasiro",
      },
      type: "product",
      message: "北代がハンバーガー売ったらしい。がっぽり☆",
      date: 202209240902,
    },
  ];

  return (
    <FeatureLayout type="monitoring">
      <div>
        システム運用者がシステムに対して実行した操作の履歴を見ることが出来ます。
      </div>
      <div className="mt-[55px] flex">
        <div className="opacity-[0.4]">ユーザーでフィルタ</div>
        <div className="ml-[10px]">
          <div>全て表示</div>
          <div></div>
        </div>
      </div>
      <div className="mt-[12px]">
        <ActionHistory
          badgeColor="bg-monitoring-config"
          badgeLabel="商品"
          actionText="クボ太郎が商品「チーズバーガー」の内容を修正しました"
          date="2022/09/04"
        />
      </div>
      <div className="mt-[12px]">
        <ActionHistory
          badgeColor="bg-monitoring-config"
          badgeLabel="商品"
          actionText="クボ太郎が商品「チーズバーガー」の内容を修正しました"
          date="2022/09/04"
        />
      </div>
      <div className="mt-[12px]">
        <ActionHistory
          badgeColor="bg-monitoring-config"
          badgeLabel="商品"
          actionText="クボ太郎が商品「チーズバーガー」の内容を修正しました"
          date="2022/09/04"
        />
      </div>
    </FeatureLayout>
  );
};

export default Monitoring;
