import { Dispatch, SetStateAction } from "react";

import { OrderCategoryId } from "../../types";

interface Props {
  id: OrderCategoryId;
  selectedCategory: OrderCategoryId;
  setSelectedCategory: Dispatch<SetStateAction<OrderCategoryId>>;
  name: string;
}

export const CategoryLi = ({ id, setSelectedCategory, name }: Props) => {
  return (
    <li
      key={id}
      onClick={() => {
        setSelectedCategory(id);
      }}
    >
      {name}
    </li>
  );
};
