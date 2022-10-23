import { useCallback, useMemo, useState } from "react";
import { NextPage } from "next";

import { OrderCategoryId, OrderDetail, OrderState } from "../../../types";
import { FeatureLayout } from "../../../components/layouts";
import { TabItems, TabUl } from "../../../components/tab-components";
import { OrderCard } from "../../../components";

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
const orders: {
  [key: number]: {
    products: OrderDetail[];
    orderNumber: number;
    state: OrderState;
  };
} = {
  9521: {
    products: [
      {
        ideogram: "🍔",
        name: "ビーフバーガー",
        orderVolume: 4,
        price: 490,
      },
      {
        ideogram: "🍨",
        name: "アイスハンバーグ",
        orderVolume: 10,
        price: 230,
      },
    ],
    orderNumber: 9521,
    state: "waiting",
  },
  8100: {
    products: [
      {
        ideogram: "🍔",
        name: "ビーフバーガー",
        orderVolume: 4,
        price: 490,
      },
      {
        ideogram: "🍨",
        name: "アイスハンバーグ",
        orderVolume: 10,
        price: 230,
      },
    ],
    orderNumber: 8100,
    state: "done",
  },
  2929: {
    products: [
      {
        ideogram: "🍔",
        name: "ビーフバーガー",
        orderVolume: 4,
        price: 490,
      },
      {
        ideogram: "🍨",
        name: "アイスハンバーグ",
        orderVolume: 10,
        price: 230,
      },
      {
        ideogram: "🍟",
        name: "ポテト",
        orderVolume: 2,
        price: 150,
      },
    ],
    orderNumber: 2929,
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

  const displayOrders = useMemo(() => {
    if (selectedCategory === "all") {
      return Object.values(orders);
    }
    return Object.values(orders).filter(
      (order) => order.state === selectedCategory
    );
  }, [selectedCategory]);

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
      <ul className="grid overflow-y-scroll gap-y-[17px] md:gap-y-[20px] lg:gap-y-[27px] xl:gap-y-[34px] 2xl:gap-y-[40px] mt-[-8px]  ml-[-8px] pt-[8px]  pl-[8px] h-[calc(100%-23px)] md:h-[calc(100%-29px)] lg:h-[calc(100%-41px)] xl:h-[calc(100%-53px)] 2xl:h-[calc(100%-67px)]">
        {displayOrders.map((order) => (
          <li key={order.orderNumber}>
            <OrderCard content={order} />
          </li>
        ))}
      </ul>
    </FeatureLayout>
  );
};

export default Orders;
