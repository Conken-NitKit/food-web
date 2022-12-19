import { useMemo } from "react";
import Image from "next/image";

import { User } from "../../types";

interface Props {
  userData: User;
}

export const UserCard = ({ userData }: Props): JSX.Element => {
  const userId = userData.id;
  const iconSrc = userData.icon;

  const title = useMemo<string>(() => {
    switch (userData.role) {
      case "admin":
        return `${userData.name}（管理者）`;

      default:
        return userData.name;
    }
  }, [userData.role, userData.name]);

  return (
    <div className="flex items-center border-t border-secondary-regular w-full h-9 md:h-11 lg:h-14 xl:h-[70px] 2xl:h-[84px]">
      <div className="relative rounded-md md:rounded-lg lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl w-6 md:w-[29px] lg:w-[37px] xl:w-[47px] 2xl:w-14 h-2/3">
        <Image src={iconSrc} layout="fill" />
      </div>

      <div className="ml-1 md:ml-1.5 lg:ml-2 xl:ml-2.5 2xl:ml-3">
        <p className="text-primary-regular text-xs lg:text-base xl:text-xl 2xl:text-2xl font-bold !leading-basic">
          {title}
        </p>

        <p className="text-[10px] xl:text-xs 2xl:text-sm text-secondary-regular leading-basic">
          @{userId}
        </p>
      </div>

      <button className="ml-auto h-[30%] aspect-square">
        <Image
          src="/three-dots.svg"
          width={24}
          height={24}
          layout="responsive"
        />
      </button>
    </div>
  );
};
