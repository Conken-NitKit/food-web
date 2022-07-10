import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CategoryUl = ({ children }: Props) => {
  return (
    <ul className="flex h-[18px] md:h-[22px] lg:h-[29px] xl:h-[37px] 2xl:h-11">
      {children}
    </ul>
  );
};
