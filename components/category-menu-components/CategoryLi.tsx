import { OrderCategoryId } from "../../types";

interface Props {
  key: OrderCategoryId;
  isChosen: boolean;
  name: string;
}

export const CategoryLi = ({ key, isChosen, name }: Props) => {
  return <li key={key}>{name}</li>;
};
