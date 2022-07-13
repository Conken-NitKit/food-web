import { useState } from "react";
import { NextPage } from "next";

import { OrderCategoryId } from "../types";
import { FeatureLayout } from "../components/layouts";
import { CategoryUl } from "../components/category-menu-components/CategoryUl";

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

  return (
    <FeatureLayout type="orders">
      <CategoryUl>
        {Object.values(CATEGORIES).map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </CategoryUl>
    </FeatureLayout>
  );
};

export default Orders;
