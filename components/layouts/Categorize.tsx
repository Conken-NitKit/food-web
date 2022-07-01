import { LayoutProps } from "../../types";
import { FeatureLayout } from ".";

export const CategorizeLayout: ({
  type,
  children,
}: LayoutProps) => JSX.Element = () => {
  return (
    <FeatureLayout type="orders">
      <></>
    </FeatureLayout>
  );
};
