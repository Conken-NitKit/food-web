import { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

import { OrderCategoryId } from "../../types";

interface Props {
  id: OrderCategoryId;
  name: string;
  isSelected: boolean;
  selectedCategory: OrderCategoryId;
  setSelectedCategory: Dispatch<SetStateAction<OrderCategoryId>>;
}

export const CategoryLi = ({
  id,
  name,
  isSelected,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <>
      <p
        className={classNames(
          "flex justify-center items-center px-[5px] md:px-[6px] lg:px-2 xl:px-[10px] 2xl:px-3 h-[92%] text-[10px] md:text-xs lg:text-[15px] xl:text-[19px] 2xl:text-23[px]",
          isSelected ? "text-letter font-bold" : "text-letter-sub"
        )}
      >
        {name}
      </p>

      {isSelected && (
        <hr className="border-0 rounded-[1px] lg:rounded-sm h-[8%] bg-gradient-to-b from-theme-start to-theme-end" />
      )}
    </>
  );
};
