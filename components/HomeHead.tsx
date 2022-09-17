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
      <div className="w-full ml-[3.3%]">
        <h1 className="text-[36px] font-bold text-primary-regular leading-[42px]">
          コンピュータ研究部
        </h1>
        <p className="mt-[1.56%] text-[16px] text-secondary-regular leading-[18.75px]">
          https://food.netlify/conken-festival
        </p>
        <div className="flex mt-[3.5%] h-[21.7%]">
          <a className="flex items-center justify-center border border-secondary-regular rounded-[14px] w-[80.4%] h-full text-[14px] text-primary-regular font-bold">
            <p>モバイルオーダー用のページを確認する</p>
          </a>
          <button
            onClick={urlCopy}
            className="ml-auto border border-secondary-regular rounded-[14px] w-[17.1%] h-full font-bold text-primary-inverted bg-primary-dark-regular"
          >
            <p>コピー</p>
          </button>
        </div>
      </div>
    </div>
  );
};
//display, position, top/bottom/right/left, m, border, p, w, h
