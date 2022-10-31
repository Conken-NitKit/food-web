export const AddUserCard = (): JSX.Element => {
  return (
    <div className="flex items-center w-full h-9 md:h-11 lg:h-14 xl:h-[70px] 2xl:h-[84px]">
      <button className="border border-secondary-regular rounded-md md:rounded-lg lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl w-6 md:w-[29px] lg:w-[37px] xl:w-[47px] 2xl:w-14 h-2/3 font-bold text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-none">
        ＋
      </button>

      <p className="ml-1 md:ml-1.5 lg:ml-2 xl:ml-2.5 2xl:ml-3 text-xs lg:text-base xl:text-xl 2xl:text-2xl">
        共同編集者の追加
      </p>
    </div>
  );
};
