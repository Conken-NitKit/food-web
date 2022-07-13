import { OrderCategoryId } from "../../types";

interface Props {
  key: OrderCategoryId;
  selectedCategory: OrderCategoryId;
  name: string;
}

export const CategoryLi = ({ key, name }: Props) => {
  return <li key={key}>{name}</li>;
};
