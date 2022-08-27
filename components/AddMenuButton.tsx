export const AddMenuButton = () => {
  return (
    <div className="mt-[48px] 2xl:mt-[58px] ml-[38px] 2xl:ml-[46px] border border-dash border-dashed rounded-[19px] 2xl:rounded-[23px] w-[237px] 2xl:w-[284px] h-[247px] 2xl:h-[297px]">
      <div className="flex mt-[38.3%] mx-auto border-[3px] border-dash rounded-full w-[26px] 2xl:w-[32px] h-[26px] 2xl:h-[32px]">
        <div className="m-auto w-[60%] h-[15%] bg-dash before:block before:rotate-90 before:w-[100%] before:h-[100%] before:content-[''] before:bg-dash" />
      </div>
      <p className="mx-auto mt-[6.3%] text-[16px] 2xl:text-[19px] text-dash text-center">
        メニューを追加
      </p>
    </div>
  );
};
