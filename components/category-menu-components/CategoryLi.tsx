import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

import { OrderCategoryId } from "../../types";

interface Props {
  id: OrderCategoryId;
  name: string;
  selectedCategory: OrderCategoryId;
  setSelectedCategory: Dispatch<SetStateAction<OrderCategoryId>>;
}

export const CategoryLi = ({
  id,
  name,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  const isSelected = id === selectedCategory;

  return (
    <li
      key={id}
      onClick={() => {
        setSelectedCategory(id);
      }}
      className="mr-5 md:mr-6 lg:mr-8 xl:mr-10 2xl:mr-12 h-full"
    >
      <p
        className={classNames(
          "flex justify-center items-center px-[5px] md:px-[6px] lg:px-2 xl:px-[10px] 2xl:px-3 h-[92%] text-[10px] md:text-xs lg:text-[15px] xl:text-[19px] 2xl:text-23[px]",
          id === selectedCategory ? "text-letter font-bold" : "text-letter-sub"
        )}
      >
        {name}
      </p>
    </li>
  );
};
