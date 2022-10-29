type type = "user-card" | "add-card";

interface Props {
  type: type;
}

export const UserCard = ({ type }: Props): JSX.Element => {
  return (
    <div className="w-full h-9 md:h-11 lg:h-14 xl:h-[70px] 2xl:h-[84px]"></div>
  );
};
