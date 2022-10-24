import { NextPage } from "next";
import { FeatureLayout } from "../../../components/layouts";
import { ManagementPageLayout } from "../../../components/layouts/ManagementPage";

const Users: NextPage = () => {
  return <ManagementPageLayout type="users"></ManagementPageLayout>;
};

export default Users;
