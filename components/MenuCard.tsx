import classNames from "classnames";

interface Props {
  ideogram: string;
  products: string;
  isSold: boolean;
  promotion: string;
  SalesFormat: string;
  price: number;
}

export const MenuCard: ({
  ideogram,
  products,
  isSold,
  promotion,
  SalesFormat,
  price,
}: Props) => JSX.Element = ({
  ideogram,
  products,
  isSold,
  promotion,
  SalesFormat,
  price,
}) => {
  return (
    <li className="overflow-hidden mt-[48px] ml-[38px] 2xl:ml-[46px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] w-[237px] 2xl:w-[284px] h-[247px] 2xl:h-[297px] shadow-md cursor-pointer list-none">
      <div
        className={classNames(
          "flex items-center justify-center w-full h-[60%] text-[61px] ",
          isSold ? "bg-negative" : "bg-basic"
        )}
      >
        {ideogram}
      </div>
      <div className="mx-auto w-[90%] h-[40%] text-letter">
        <div className="flex items-center h-[25%] font-bold">
          <p className="truncate w-[70%] text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
            {products}
          </p>
          {isSold && (
            <div className="truncate ml-[auto] rounded-[2px] lg:rounded-[3px] 2xl:rounded-[4px] py-px w-[20%] 2xl:w-[54px] text-[63%] text-center bg-sold-label">
              売り切れ
            </div>
          )}
        </div>
        <p className="overflow-scroll h-[45%] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] break-all">
          {promotion}
        </p>
        <div className="whitespace-nowrap flex">
          <p className="overflow-scroll w-[60%] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] font-bold">
            {SalesFormat} ￥
            <span className="text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px]">
              {price}
            </span>
          </p>
          <button className="ml-[auto] rounded-[2px] lg:rounded-[3px] xl:rounded-[3px] 2xl:rounded-[4px] py-px w-[30%] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] text-center bg-[#FFBC0D]">
            内容を編集
          </button>
        </div>
      </div>
    </li>
  );
};
