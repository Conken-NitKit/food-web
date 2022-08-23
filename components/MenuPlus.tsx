export const MenuPlus = () => {
  return (
    <li className="list-none mt-[48px] 2xl:mt-[58px] ml-[38px] 2xl:ml-[46px] rounded-[19px] 2xl:rounded-[23px] w-[237px] 2xl:w-[284px] h-[247px] 2xl:h-[297px] border border-[#998888] border-dashed">
      <button className="block mx-auto mt-[38.3%] h-[26px] 2xl:h-[32px] w-[26px] 2xl:w-[32px] rounded-full border-[3px] border-[#998888]">
          <p className="m-auto relative w-[12px] h-[3px] bg-[#998888] before:block  before:content-[''] before:w-[12px] before:h-[3px] before:bg-[#998888] before:rotate-90"></p>
      </button>
      <p className="text-[16px] 2xl:text-[19px] text-[#998888] mx-auto mt-[6.3%] 2xl:mt-[18px] text-center">
        メニューを追加
      </p>
    </li>
  );
};
