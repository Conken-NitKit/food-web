import { Children, ReactNode } from "react";
import classNames from "classnames";

import { OrderCategoryId } from "../../types";

interface Props {
  categoryName: string;
  isSelected: boolean;
}

export const TabItems = ({ categoryName, isSelected }: Props): JSX.Element => {
  return (
    <div className="w-full h-full">
      <p
        className={classNames(
          "flex justify-center items-center px-[5px] md:px-[6px] lg:px-2 xl:px-[10px] 2xl:px-3 h-[92%] text-[10px] md:text-xs lg:text-[15px] xl:text-[19px] 2xl:text-23[px]",
          isSelected
            ? "text-primary-regular font-bold"
            : "text-secondary-regular"
        )}
      >
        {categoryName}
      </p>

      {isSelected && (
        <hr className="border-0 rounded-[1px] lg:rounded-sm h-[8%] bg-accent-gradient-primary" />
      )}
    </div>
  );
};
