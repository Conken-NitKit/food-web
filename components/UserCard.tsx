import { useMemo } from "react";
import Image from "next/image";

import { User } from "../types";
import { UserCardOutline, UserCardTitleSpace, UserCardTitle } from ".";

interface Props {
  userData: User;
}

export const UserCard = ({ userData }: Props): JSX.Element => {
  const userId = userData.id;
  const iconSrc = userData.icon;
  const title = useMemo<string>(() => {
    const userName = userData.name;
    const isAdmin = userData.isAdmin;
    return isAdmin ? `${userName}（管理者）` : userName;
  }, []);
  const dotClass =
    "rounded-[50%] w-[100%] aspect-square bg-text-primary-regular";

  return (
    <UserCardOutline cardType="user-card">
      <div className="relative rounded-md md:rounded-lg lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl w-6 md:w-[29px] lg:w-[37px] xl:w-[47px] 2xl:w-14 h-2/3">
        <Image src={iconSrc} layout="fill" />
      </div>

      <UserCardTitleSpace>
        <UserCardTitle cardType="user-card" title={title} />

        <p className="text-[10px] xl:text-xs 2xl:text-sm text-secondary-regular leading-basic">
          @{userId}
        </p>
      </UserCardTitleSpace>

      <button className="flex flex-col justify-between ml-auto mr-[1%] w-[2px] md:w-[3px] lg:w-[4px] xl:w-[5px] 2xl:w-[6px] h-[30%]">
        <div className={dotClass}></div>
        <div className={dotClass}></div>
        <div className={dotClass}></div>
      </button>
    </UserCardOutline>
  );
};
