import { NextPage } from "next";
import { ManagementPageLayout } from "../../../components/layouts/ManagementPage";

const Users: NextPage = () => {
  const tips = "システムの共同編集者を管理することができます。";

  return (
    <ManagementPageLayout type="users" tips={tips}>
      <div className="mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-6 ml-1.5 md:ml-2 lg:ml-2.5 xl:ml-3 2xl:ml-4 mr-4 md:mr-5 lg:mr-7 xl:mr-9 2xl:mr-11"></div>
    </ManagementPageLayout>
  );
};

export default Users;
