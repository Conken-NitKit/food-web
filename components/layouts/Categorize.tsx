import { LayoutProps } from "../../types";
import { FeatureLayout } from ".";

export const CategorizeLayout: ({
  type,
  children,
}: LayoutProps) => JSX.Element = ({ type, children }) => {
  return (
    <FeatureLayout type={type}>
      <ul className="flex h-[18px] md:h-[22px] lg:h-[29px] xl:h-[37px] 2xl:h-11"></ul>
      {children}
    </FeatureLayout>
  );
};
