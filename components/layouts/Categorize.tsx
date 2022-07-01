import { LayoutProps } from "../../types";
import { FeatureLayout } from ".";

export const CategorizeLayout: ({
  type,
  children,
}: LayoutProps) => JSX.Element = ({ type, children }) => {
  return (
    <FeatureLayout type="orders">
      <></>
    </FeatureLayout>
  );
};
