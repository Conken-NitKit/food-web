import { UserCardOutline, UserCardTitleSpace, UserCardTitle } from ".";

export const AddUserCard = (): JSX.Element => {
  return (
    <UserCardOutline cardType="add-card">
      <button className="border border-secondary-regular rounded-md md:rounded-lg lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl w-6 md:w-[29px] lg:w-[37px] xl:w-[47px] 2xl:w-14 h-2/3 font-bold text-primary-regular text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl !leading-none">
        ＋
      </button>

      <UserCardTitleSpace>
        <UserCardTitle cardType="add-card" title="共同編集者の追加" />
      </UserCardTitleSpace>
    </UserCardOutline>
  );
};
