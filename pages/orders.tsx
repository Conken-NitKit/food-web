import { NextPage } from "next";

import { FeatureLayout } from "../components/layouts";

type CategoryId = "all" | "waiting" | "done" | "canceled";

const CATEGORIES: Record<CategoryId, { id: CategoryId; name: string }> = {
  all: {
    id: "all",
    name: "すべて",
  },
  waiting: {
    id: "waiting",
    name: "提供待ち",
  },
  done: {
    id: "done",
    name: "提供済み",
  },
  canceled: {
    id: "canceled",
    name: "キャンセル済み",
  },
};

const Orders: NextPage = () => {
  return (
    <FeatureLayout type="orders">
      {Object.values(CATEGORIES).map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </FeatureLayout>
  );
};

export default Orders;
