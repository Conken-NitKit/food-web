import { NextPage } from "next";

import { OrderCategories } from "../types";
import { FeatureLayout } from "../components/layouts";

const ORDER_CATEGORIES: OrderCategories = {
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
      <ul className="flex h-[18px] md:h-[22px] lg:h-[29px] xl:h-[37px] 2xl:h-11">
        {Object.values(ORDER_CATEGORIES).map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </FeatureLayout>
  );
};

export default Orders;
