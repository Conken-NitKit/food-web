import { NextPage } from "next";

import { ManagementPageLayout } from "../../../components/layouts/ManagementPage";
import { AddUserCard, UserCard } from "../../../components/user-cards";
import { User } from "../../../types";

const Users: NextPage = () => {
  //TODO: DB実装後にDBのデータに変更すること。現状定数ですが、DB実装後は変数になるのでキャメルケースにしてます。
  const users: User[] = [
    {
      id: "user_a",
      name: "ユーザーA",
      icon: "/vercel.svg",
      role: "admin",
    },
    {
      id: "user_b",
      name: "ユーザーB",
      icon: "/vercel.svg",
      role: "member",
    },
  ];

  return (
    <ManagementPageLayout
      type="users"
      tips="システムの共同編集者を管理することができます。"
    >
      <div className="mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-6 ml-1.5 md:ml-2 lg:ml-2.5 xl:ml-3 2xl:ml-4 mr-4 md:mr-5 lg:mr-7 xl:mr-9 2xl:mr-11 font-secondary-regular">
        <AddUserCard />
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    </ManagementPageLayout>
  );
};

export default Users;
