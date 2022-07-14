export const MenuCard: ({ isSold: boolean }) => JSX.Element = ({ isSold }) => {
  return (
    <div className="overflow-hidden shadow-md m-[19px] md:m-[23px] lg:m-[31px] xl:m-[38px] 2xl:m-[46px] h-[124px] md:h-[148px] lg:h-[198px] xl:h-[247px] 2xl:h-[297px] w-[118px] md:w-[142px] lg:w-[189px] xl:w-[237px] 2xl:w-[284px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px]">
      <div
        className={`h-[60%] w-full text-[26px] md:text-[31px] lg:text-[41px] xl:text-[51px] 2xl:text-[61px] flex items-center justify-center bg-[${
          isSold ? "#E5A3B0" : "#FFDEB5"
        }]`}
      >
        🍔
      </div>
      <div className="text-letter mx-auto w-[90%] h-[40%]">
        <div className="truncate flex items-center font-bold h-[25%]">
          <p className="overflow-scroll w-[70%] text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
            ビーフハンバーガー
          </p>
          {isSold && (
            <div className="truncate text-center bg-[#E8521E] py-[1px] md:py-[1px] lg:py-[2px] xl:py-[2px] 2xl:py-[2px] ml-[auto] w-[22px] md:w-[27px] lg:w-[36px] xl:w-[45px] 2xl:w-[54px]  rounded-[2px] md:rounded-[2px] lg:rounded-[3px] xl:rounded-[3px] 2xl:rounded-[4px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px]">
              売り切れ
            </div>
          )}
        </div>
        <p className="overflow-scroll break-all text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] h-[44%]">
          おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </p>
        <div className="flex">
          <p className="truncate font-bold text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px]">
            単品 ￥
            <span className="text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px]">
              49000000
            </span>
          </p>
          <button className="truncate text-center bg-[#FFBC0D] py-[1px] w-[38px] md:w-[46px] lg:w-[61px] xl:w-[77px] 2xl:w-[92px]  rounded-[2px] md:rounded-[2px] lg:rounded-[3px] xl:rounded-[3px] 2xl:rounded-[4px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] ml-[auto]">
            内容を編集
          </button>
        </div>
      </div>
    </div>
  );
};
