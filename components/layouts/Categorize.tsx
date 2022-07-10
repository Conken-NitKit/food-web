import { LayoutProps, OrderCategories } from "../../types";
import { FeatureLayout } from ".";

type SalesCategoryId = "sales";

type SalesCategories = Record<
  SalesCategoryId,
  { id: SalesCategoryId; name: string }
>;

interface CategorizeLayoutProps extends LayoutProps {
  categories: OrderCategories | SalesCategories;
}

export const CategorizeLayout: ({
  type,
  children,
  categories,
}: CategorizeLayoutProps) => JSX.Element = ({ type, children, categories }) => {
  return (
    <FeatureLayout type={type}>
      <ul className="flex h-[18px] md:h-[22px] lg:h-[29px] xl:h-[37px] 2xl:h-11">
        {Object.values(categories).map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      {children}
    </FeatureLayout>
  );
};
