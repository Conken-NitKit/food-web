export const MenuCard: ({ isSold: boolean }) => JSX.Element = ({ isSold }) => {
  return (
    <div className="overflow-hidden shadow-md shadow-md m-[19px] md:m-[23px] lg:m-[31px] xl:m-[38px] 2xl:m-[46px] h-[124px] md:h-[148px] lg:h-[198px] xl:h-[247px] 2xl:h-[297px] w-[118px] md:w-[142px] lg:w-[189px] xl:w-[237px] 2xl:w-[284px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px]">
      <div
        className={`h-[60%] w-full text-[26px] md:text-[31px] lg:text-[41px] xl:text-[51px] 2xl:text-[61px] items-center flex items-center justify-center bg-[${
          isSold ? "#E5A3B0" : "#FFDEB5"
        }]`}
      >
        🍔
      </div>
      <div className="text-letter mx-auto w-full h-[40%]">
        <div className="flex items-center font-bold h-[7px] md:h-[9px] lg:h-[12px] xl:h-[14px] 2xl:h-[17px]">
          <p className="text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
            ビーフハンバーガー
          </p>
          {isSold && (
            <div className="truncate text-center bg-[#E8521E] py-[1px] md:py-[1px] lg:py-[2px] xl:py-[2px] 2xl:py-[2px] ml-[auto] w-[22px] md:w-[27px] lg:w-[36px] xl:w-[45px] 2xl:w-[54px]  rounded-[2px] md:rounded-[2px] lg:rounded-[3px] xl:rounded-[3px] 2xl:rounded-[4px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px]">
              売り切れ
            </div>
          )}
        </div>
        <p className="mt-[4px] md:mt-[5px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[10px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px]">
          おいしさも食べごたえもビッグな人気メニュー、ビッグマック。パティが倍でそのビッグな食べごたえもボリュームアップ。
        </p>
        <div className="flex items-center">
          <p className="font-bold text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px]">
            単品 ￥
            <span className="text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px]">
              490
            </span>
          </p>
          <button className="text-center bg-[#FFBC0D] py-[1px] md:py-[1px] lg:py-[2px] xl:py-[2px] 2xl:py-[3px] w-[38px] md:w-[46px] lg:w-[61px] xl:w-[77px] 2xl:w-[92px]  rounded-[2px] md:rounded-[2px] lg:rounded-[3px] xl:rounded-[3px] 2xl:rounded-[4px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] ml-[auto]">
            内容を編集
          </button>
        </div>
      </div>
    </div>
  );
};