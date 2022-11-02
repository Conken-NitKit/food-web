import { User } from "../types";
import { UserCardOutline, UserCardTitleSpace, UserCardTitle } from ".";

interface Props {
  userData: User;
}

export const UserCard = ({ userData }: Props): JSX.Element => {
  return (
    <UserCardOutline cardType="user-card">
      <UserCardTitleSpace>
        <UserCardTitle cardType="user-card" title="" />
      </UserCardTitleSpace>
    </UserCardOutline>
  );
};
