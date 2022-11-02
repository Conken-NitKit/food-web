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
      <UserCardTitleSpace>
        <UserCardTitle cardType="user-card" title={title} />
      </UserCardTitleSpace>
    </UserCardOutline>
  );
};
