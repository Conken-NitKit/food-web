const urlCopy = () => {
  const url = "コピー";
  navigator.clipboard.writeText(url).then(() => {
    alert("copied!");
  });
};

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
        <div className="flex mt-[3.35%] h-[21.7%]">
          <a className="flex items-center justify-center border border-secondary-regular rounded-[14px] w-[77.2%] h-full text-[14px] font-bold">
            モバイルオーダー用のページを確認する
          </a>
          <button onClick={urlCopy} className="ml-[6.81%] border border-secondary-regular rounded-[14px] w-[16.39%] h-full font-bold text-primary-inverted bg-primary-dark-regular">コピー</button>
        </div>
      </div>
    </div>
  );
};
//display, position, top/bottom/right/left, m, border, p, w, h
