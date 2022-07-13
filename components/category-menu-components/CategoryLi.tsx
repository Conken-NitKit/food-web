import { Dispatch, SetStateAction } from "react";

import { OrderCategoryId } from "../../types";

interface Props {
  key: OrderCategoryId;
  selectedCategory: OrderCategoryId;
  setSelectedCategory: Dispatch<SetStateAction<OrderCategoryId>>;
  name: string;
}

export const CategoryLi = ({ key, setSelectedCategory, name }: Props) => {
  return (
    <li
      key={key}
      onClick={() => {
        setSelectedCategory(key);
      }}
    >
      {name}
    </li>
  );
};
