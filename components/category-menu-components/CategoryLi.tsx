import { OrderCategoryId } from "../../types";

interface Props {
  key: OrderCategoryId;
  name: string;
}

export const CategoryLi = ({ key, name }: Props) => {
  return <li key={key}>{name}</li>;
};
