import { useCallback, useState } from "react";
import { NextPage } from "next";

import { OrderCategoryId } from "../types";
import { FeatureLayout } from "../components/layouts";
import { TabItems, TabUl } from "../components/tab-components";
import { OrderCard } from "../components";
import { OrderState } from "../types/OrderState";
import { OrderDetail } from "../types/OrderDetail";

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

//仮置きのデータ（実際はデータベースから取得する）
const OrderDetails: {
  [key: number]: {
    products: OrderDetail[];
    OrderNumber: number;
    state: OrderState;
  };
} = {
  9521: {
    products: [
      {
        ideogram: "🍔",
        name: "ビーフバーガー",
        NumberOfOrders: 4,
        price: 490,
      },
      {
        ideogram: "🍨",
        name: "アイスハンバーグ",
        NumberOfOrders: 10,
        price: 230,
      },
    ],
    OrderNumber: 9521,
    state: "waiting",
  },
  8100: {
    products: [
      {
        ideogram: "🍔",
        name: "ビーフバーガー",
        NumberOfOrders: 4,
        price: 490,
      },
      {
        ideogram: "🍨",
        name: "アイスハンバーグ",
        NumberOfOrders: 10,
        price: 230,
      },
    ],
    OrderNumber: 8100,
    state: "done",
  },
  2929: {
    products: [
      {
        ideogram: "🍔",
        name: "ビーフバーガー",
        NumberOfOrders: 4,
        price: 490,
      },
      {
        ideogram: "🍨",
        name: "アイスハンバーグ",
        NumberOfOrders: 10,
        price: 230,
      },
      {
        ideogram: "🍟",
        name: "ポテト",
        NumberOfOrders: 2,
        price: 150,
      },
    ],
    OrderNumber: 2929,
    state: "canceled",
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
      <ul className="overflow-y-scroll h-[80%]">
        {selectedCategory === "all"
          ? Object.values(OrderDetails).map((detail) => (
              <li key={detail.OrderNumber}>
                <OrderCard content={detail} />
              </li>
            ))
          : Object.values(OrderDetails)
              .filter((detail) => detail.state === selectedCategory)
              .map((detail) => (
                <li key={detail.OrderNumber}>
                  <OrderCard content={detail} />
                </li>
              ))}
      </ul>
    </FeatureLayout>
  );
};

export default Orders;
