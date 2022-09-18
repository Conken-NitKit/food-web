const urlCopy = () => {
  const url = "コピー";
  navigator.clipboard.writeText(url).then(() => {
    alert("copied!");
  });
};

export const HomeHead = (): JSX.Element => {
  return (
    <div className="flex mx-auto mt-[29px] md:mt-[35px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[69px] w-[266px] md:w-[320px] lg:w-[426px] xl:w-[533px] 2xl:w-[639px] h-[52px] md:h-[62px] lg:h-[83px] xl:h-[103px] 2xl:h-[124px]">
      <div className="flex items-center justify-center rounded-[6px] md:rounded-[8px] lg:rounded-[10px] xl:rounded-[13px] 2xl:rounded-[15px] h-full aspect-square text-[19px] md:text-[23px] lg:text-[31px] xl:text-[38px] 2xl:text-[46px] bg-secondary-regular">
        🖥
      </div>
      <div className="my-auto ml-[3.3%] w-full">
        <h1 className=" text-[14px] md:text-[17px] lg:text-[23px] xl:text-[29px] 2xl:text-[35px] font-bold text-primary-regular leading-[1.17]">
          コンピュータ研究部
        </h1>
        <p className="mt-[1.56%] text-[10px] xl:text-[13px] 2xl:text-[15px] text-secondary-regular leading-[1.19]">
          https://food.netlify/conken-festival
        </p>
        <div className="flex mt-[3.5%] h-[21.7%]">
          <a className="flex items-center justify-center border border-secondary-regular rounded-[6px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] 2xl:rounded-[13px] w-[80.4%] h-full text-[11px] 2xl:text-[13px] text-primary-regular font-bold">
            <p>モバイルオーダー用のページを確認する</p>
          </a>
          <button
            onClick={urlCopy}
            className="ml-auto border border-secondary-regular rounded-[6px] md:rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] 2xl:rounded-[13px] w-[17.1%] h-full text-[11px] 2xl:text-[13px] font-bold text-primary-inverted bg-primary-dark-regular"
          >
            <p>コピー</p>
          </button>
        </div>
      </div>
    </div>
  );
};
