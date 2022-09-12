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
    details: OrderDetail[];
    OrderNumber: number;
    state: OrderState;
  };
} = {
  9521: {
    details: [
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
    state: "wait",
  },
  8100: {
    details: [
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
    state: "complete",
  },
  2929: {
    details: [
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
    OrderNumber: 2929,
    state: "reject",
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
      <ul>
        {selectedCategory === "all" &&
          Object.values(OrderDetails).map((detail) => (
            <li key={detail.OrderNumber}>
              <OrderCard
                state={detail.state}
                OrderNumber={detail.OrderNumber}
                details={detail.details}
              />
            </li>
          ))}
        {selectedCategory === "waiting" &&
          Object.values(OrderDetails)
            .filter((detail) => detail.state === "wait")
            .map((detail) => (
              <li key={detail.OrderNumber}>
                <OrderCard
                  state={detail.state}
                  OrderNumber={detail.OrderNumber}
                  details={detail.details}
                />
              </li>
            ))}
        {selectedCategory === "done" &&
          Object.values(OrderDetails)
            .filter((detail) => detail.state === "complete")
            .map((detail) => (
              <li key={detail.OrderNumber}>
                <OrderCard
                  state={detail.state}
                  OrderNumber={detail.OrderNumber}
                  details={detail.details}
                />
              </li>
            ))}
        {selectedCategory === "canceled" &&
          Object.values(OrderDetails)
            .filter((detail) => detail.state === "reject")
            .map((detail) => (
              <li key={detail.OrderNumber}>
                <OrderCard
                  state={detail.state}
                  OrderNumber={detail.OrderNumber}
                  details={detail.details}
                />
              </li>
            ))}
      </ul>
    </FeatureLayout>
  );
};

export default Orders;
