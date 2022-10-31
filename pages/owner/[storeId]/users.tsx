import { NextPage } from "next";

import { ManagementPageLayout } from "../../../components/layouts/ManagementPage";
import { AddUserCard } from "../../../components";
import { User } from "../../../types";

const Users: NextPage = () => {
  const tips = "システムの共同編集者を管理することができます。";

  //TODO: DB実装後にDBのデータに変更すること。現状定数ですが、DB実装後は変数になるのでキャメルケースにしてます。
  const users: User[] = [
    {
      id: "user_a",
      name: "ユーザーA",
      icon: "https://drive.google.com/file/d/1-Gz6MO_39wXHYXTNxT46IPXSvUavS9Qr/view?usp=sharing",
      isAdmin: true,
    },
    {
      id: "user_b",
      name: "ユーザーB",
      icon: "",
      isAdmin: false,
    },
  ];

  return (
    <ManagementPageLayout type="users" tips={tips}>
      <div className="mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-6 ml-1.5 md:ml-2 lg:ml-2.5 xl:ml-3 2xl:ml-4 mr-4 md:mr-5 lg:mr-7 xl:mr-9 2xl:mr-11 font-secondary-regular">
        <AddUserCard />
        <ul>
          {users.map((user) => (
            <li key={user.id}></li>
          ))}
        </ul>
      </div>
    </ManagementPageLayout>
  );
};

export default Users;