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
      className="h-full"
    >
      <p className="flex justify-center items-center px-[5px] md:px-[6px] lg:px-2 xl:px-[10px] 2xl:px-3 h-[92%] text-[10px] md:text-xs lg:text-[15px] xl:text-[19px] 2xl:text-23[px]">
        {name}
      </p>
    </li>
  );
};
