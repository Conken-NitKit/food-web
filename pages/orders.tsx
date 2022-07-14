import { useState } from "react";
import { NextPage } from "next";

import { OrderCategoryId } from "../types";
import { FeatureLayout } from "../components/layouts";
import { CategoryLi, CategoryUl } from "../components/category-menu-components";

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
          <CategoryLi
            key={category.id}
            id={category.id}
            name={category.name}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </CategoryUl>
    </FeatureLayout>
  );
};

export default Orders;
