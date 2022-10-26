import { PageId } from "../../types";
import { FeatureLayout } from "./Feature";

interface Props {
  type: PageId;
  tips: string;
}

export const ManagementPageLayout = ({ type, tips }: Props): JSX.Element => {
  return (
    <FeatureLayout type={type}>
      <p>{tips}</p>
    </FeatureLayout>
  );
};
