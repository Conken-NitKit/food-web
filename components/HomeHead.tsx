export const HomeHead = (): JSX.Element => {
  return (
    <div className="flex mx-auto mt-[72px] w-[666px] h-[129px]">
      <div className="flex items-center justify-center rounded-[16px] h-full aspect-square text-[48px] bg-secondary-regular ">
        🖥
      </div>
      <div className="w-full ">
        <h1 className="text-[36px] font-bold leading-[42px]">
          コンピュータ研究部
        </h1>
        <p className="mt-[1.49%] text-[16px] leading-[18.75px]">
          https://food.netlify/conken-festival
        </p>
        <div>
        <a className="flex items-center justify-center mt-[3.35%] border border-secondary-regular rounded-[14px] w-[77.2%] h-[21.7%] text-[14px] font-bold">
          モバイルオーダー用のページを確認する
        </a>
        </div>
      </div>
    </div>
  );
};
//display, position, top/bottom/right/left, m, border, p, w, h

