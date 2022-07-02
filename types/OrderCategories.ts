import { OrderCategoryId } from ".";

export type OrderCategories = Record<
  OrderCategoryId,
  { id: OrderCategoryId; name: string }
>;
