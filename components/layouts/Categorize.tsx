import { LayoutProps, OrderCategories } from "../../types";
import { FeatureLayout } from ".";

interface CategorizeLayoutProps extends LayoutProps {
  categories: OrderCategories;
}

export const CategorizeLayout: ({
  type,
  children,
  categories,
}: CategorizeLayoutProps) => JSX.Element = ({ type, children }) => {
  return (
    <FeatureLayout type={type}>
      <ul className="flex h-[18px] md:h-[22px] lg:h-[29px] xl:h-[37px] 2xl:h-11"></ul>
      {children}
    </FeatureLayout>
  );
};
