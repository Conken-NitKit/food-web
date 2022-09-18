export const HomeEarnigs = (): JSX.Element => {
  return (
    <div className="mt-[50px] ml-[267px] w-[564.4px] h-[234px]">
      <div className="flex items-center  h-[14.1%]">
        <h1 className="text-[28px] font-bold">今月</h1>
        <p className="ml-[2.12%] text-[16px]">
          {new Date().getFullYear()}年{new Date().getMonth() + 1}月
        </p>
      </div>
    </div>
  );
};
