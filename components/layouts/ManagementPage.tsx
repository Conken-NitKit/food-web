import { PageId } from "../../types";
import { FeatureLayout } from "./Feature";

interface Props {
  type: PageId;
}

export const ManagementPageLayout = ({ type }: Props): JSX.Element => {
  return (
    <FeatureLayout type={type}>
      <></>
    </FeatureLayout>
  );
};
