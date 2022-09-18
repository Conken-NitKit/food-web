export const HomeEarnigs = (): JSX.Element => {
  return (
    <div className="mt-[50px] ml-[267px] w-[564.4px] h-[234px] text-primary-regular">
      <div className="flex items-center  h-[14.1%]">
        <h1 className="text-[28px] font-bold">今月</h1>
        <p className="ml-[2.12%] text-[16px]">
          {new Date().getFullYear()}年{new Date().getMonth() + 1}月
        </p>
      </div>
      <div className="flex items-center mt-[30px] h-[41%]">
        <div className="pr-[12.6%] border-r text-center">
          <p className="mb-[10.5%] text-[16px]">売上合計</p>
          <p className="text-[24px] font-bold">
            ¥ <span className="text-[32px]">361,280</span>
          </p>
        </div>
        <div className="pl-[14.2%] text-center">
          <p className="mb-[10.5%] text-[16px]">注文回数合計</p>
          <p className="text-[32px] font-bold">962</p>
        </div>
      </div>
    </div>
  );
};
