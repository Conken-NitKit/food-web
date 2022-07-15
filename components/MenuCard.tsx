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
    <li className="overflow-hidden m-[19px] md:m-[23px] lg:m-[31px] xl:m-[38px] 2xl:m-[46px] rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[19px] 2xl:rounded-[23px] w-[118px] md:w-[142px] lg:w-[189px] xl:w-[237px] 2xl:w-[284px] h-[124px] md:h-[148px] lg:h-[198px] xl:h-[247px] 2xl:h-[297px] shadow-md cursor-pointer list-none">
      <div
        className={classNames(
          "flex items-center justify-center w-full h-[60%] text-[26px] md:text-[31px] lg:text-[41px] xl:text-[51px] 2xl:text-[61px] ",
          isSold ? "bg-[#E5A3B0]" : "bg-[#FFDEB5]"
        )}
      >
        {ideogram}
      </div>
      <div className="mx-auto w-[90%] h-[40%] text-letter">
        <div className="flex items-center h-[25%] font-bold">
          <p className="overflow-scroll w-[70%] text-[7px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px]">
            {products}
          </p>
          {isSold && (
            <div className="truncate ml-[auto] rounded-[2px] lg:rounded-[3px] 2xl:rounded-[4px] py-px w-[22px] md:w-[27px] lg:w-[36px] xl:w-[45px] 2xl:w-[54px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] text-center bg-[#E8521E]">
              売り切れ
            </div>
          )}
        </div>
        <p className="overflow-scroll h-[44%] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] break-all">
          {promotion}
        </p>
        <div className="flex">
          <p className="text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] font-bold">
            {SalesFormat} ￥
            <span className="text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px]">
              {price}
            </span>
          </p>
          <button className="truncate ml-[auto] rounded-[2px] lg:rounded-[3px] xl:rounded-[3px] 2xl:rounded-[4px] py-px w-[38px] md:w-[46px] lg:w-[61px] xl:w-[77px] 2xl:w-[92px] text-[4px] md:text-[5px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px] text-center bg-[#FFBC0D]">
            内容を編集
          </button>
        </div>
      </div>
    </li>
  );
};
