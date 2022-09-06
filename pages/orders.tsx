import { useCallback, useState } from "react";
import { NextPage } from "next";

import { OrderCategoryId } from "../types";
import { FeatureLayout } from "../components/layouts";
import { TabItems, TabUl } from "../components/tab-components";

const CATEGORIES: Record<
  OrderCategoryId,
  { id: OrderCategoryId; name: string }
> = {
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
  const [selectedCategory, setSelectedCategory] =
    useState<OrderCategoryId>("all");

  const createCategoryClickHandler = useCallback((id: OrderCategoryId) => {
    return () => {
      setSelectedCategory(id);
    };
  }, []);

  return (
    <FeatureLayout type="orders">
      <TabUl>
        {Object.values(CATEGORIES).map((category) => (
          <li
            key={category.id}
            onClick={createCategoryClickHandler(category.id)}
            className="mr-5 md:mr-6 lg:mr-8 xl:mr-10 2xl:mr-12 h-full cursor-pointer"
          >
            <TabItems
              categoryName={category.name}
              isSelected={selectedCategory === category.id}
            />
          </li>
        ))}
      </TabUl>
    </FeatureLayout>
  );
};

export default Orders;