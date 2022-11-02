import { UserCardOutline, UserCardTitleSpace, UserCardTitle } from ".";

export const UserCard = (): JSX.Element => {
  return (
    <UserCardOutline cardType="user-card">
      <UserCardTitleSpace>
        <UserCardTitle cardType="user-card" title="" />
      </UserCardTitleSpace>
    </UserCardOutline>
  );
};
