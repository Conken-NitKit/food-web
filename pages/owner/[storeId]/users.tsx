import { NextPage } from "next";
import { FeatureLayout } from "../../../components/layouts";
import { ManagementPageLayout } from "../../../components/layouts/ManagementPage";

const Users: NextPage = () => {
  const tips = "システムの共同編集者を管理することができます。";

  return (
    <ManagementPageLayout type="users" tips={tips}>
      <></>
    </ManagementPageLayout>
  );
};

export default Users;
