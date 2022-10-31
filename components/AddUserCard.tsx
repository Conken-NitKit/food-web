export const AddUserCard = (): JSX.Element => {
  return (
    <div className="flex items-center w-full h-9 md:h-11 lg:h-14 xl:h-[70px] 2xl:h-[84px]">
      <button className="border border-secondary-regular rounded-md md:rounded-lg lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl w-6 md:w-[29px] lg:w-[37px] xl:w-[47px] 2xl:w-14 h-2/3 font-bold text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-none">
        ＋
      </button>

      <p>共同編集者の追加</p>
    </div>
  );
};
