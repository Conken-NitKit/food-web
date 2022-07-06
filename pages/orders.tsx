import { NextPage } from "next";

import { OrderCategories } from "../types";
import { CategorizeLayout } from "../components/layouts/Categorize";

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
    <CategorizeLayout type="orders" categories={ORDER_CATEGORIES}>
      <></>
    </CategorizeLayout>
  );
};

export default Orders;
