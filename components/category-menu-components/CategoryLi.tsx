import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

import { OrderCategoryId } from "../../types";

interface Props {
  id: OrderCategoryId;
  name: string;
  selectedCategory: OrderCategoryId;
  setSelectedCategory: Dispatch<SetStateAction<OrderCategoryId>>;
}

export const CategoryLi = ({ id, name, setSelectedCategory }: Props) => {
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
