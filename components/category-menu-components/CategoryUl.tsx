import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CategoryUl: ({ children }: Props) => JSX.Element = ({
  children,
}: Props) => {
  return (
    <ul className="flex h-[19px] md:h-[23px] lg:h-[30px] xl:h-[37px] 2xl:h-[46px]">
      {children}
    </ul>
  );
};
