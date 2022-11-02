import { User } from "../types";
import { UserCardOutline, UserCardTitleSpace, UserCardTitle } from ".";

interface Props {
  userData: User;
}

export const UserCard = ({ userData }: Props): JSX.Element => {
  const userName = userData.name;
  const isAdmin = userData.isAdmin;
  const title: string = isAdmin ? `${userName}（管理者）` : userName;

  return (
    <UserCardOutline cardType="user-card">
      <div className="rounded-md md:rounded-lg lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl w-6 md:w-[29px] lg:w-[37px] xl:w-[47px] 2xl:w-14 h-2/3"></div>

      <UserCardTitleSpace>
        <UserCardTitle cardType="user-card" title={title} />
      </UserCardTitleSpace>
    </UserCardOutline>
  );
};
