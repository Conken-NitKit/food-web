import { NextPage } from "next";

import { OrderCategoryId } from "../types";
import { CategorizeLayout } from "../components/layouts/Categorize";

const ORDER_CATEGORIES: Record<
  OrderCategoryId,
  { id: OrderCategoryId; name: string }
> = {
  all: {
    id: "all",
    name: "すべて",
  },
  canceled: {
    id: "canceled",
    name: "すべて",
  },
  done: {
    id: "done",
    name: "すべて",
  },
  waiting: {
    id: "waiting",
    name: "すべて",
  },
};

const Orders: NextPage = () => {
  return (
    <CategorizeLayout type="orders">
      <></>
    </CategorizeLayout>
  );
};

export default Orders;
