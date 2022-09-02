import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CategoryUl = ({ children }: Props): JSX.Element => {
  return (
    <ul className="flex mb-3 md:mb-3.5 lg:mb-[19px] xl:mb-6 2xl:mb-[29px] h-[19px] md:h-[23px] lg:h-[30px] xl:h-[37px] 2xl:h-[46px]">
      {children}
    </ul>
  );
};
