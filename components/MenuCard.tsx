import classNames from "classnames";
import { MenuContentsProps } from "../types/MenuContentsProps";

interface Props {
  content: MenuContentsProps;
  isSold: boolean;
}

export const MenuCard: ({ content, isSold }: Props) => JSX.Element = ({
  content,
  isSold,
}) => {
  return (
    <div className="overflow-hidden mt-[48px] 2xl:mt-[58px] ml-[38px] 2xl:ml-[46px] rounded-[19px] 2xl:rounded-[23px] w-[237px] 2xl:w-[284px] h-[247px] 2xl:h-[297px] shadow-md cursor-pointer font-menu-card">
      <div
        className={classNames(
          "flex items-center justify-center w-full h-[60.8%] text-[51px] 2xl:text-[61px]",
          isSold ? "bg-sold-out" : "bg-on-sale"
        )}
      >
        {content.ideogram}
      </div>
      <div className="mx-auto pt-[3.5%] pb-[4.4%] w-[89.5%] h-[39.2%] text-letter">
        <div className="flex items-center font-bold">
          <p className="truncate w-[70%] text-[14px] 2xl:text-[17px]">
            {content.name}
          </p>
          {isSold && (
            <div className="ml-[auto] rounded-[3px] 2xl:rounded-[4px] px-[3.8%] py-[1.2%] text-[10px] bg-sold-label">
              売り切れ
            </div>
          )}
        </div>
        <p className="overflow-scroll my-[2.5%] h-[33%] text-[10px] leading-3 break-all">
          {content.promotion}
        </p>
        <div className="flex items-center">
          <p className="w-[60%] text-[10px] font-bold">
            単品 ￥
            <span className="text-[16px] 2xl:text-[19px]">{content.price}</span>
          </p>
          <button className="ml-[auto] rounded-[3px] 2xl:rounded-[4px] py-[1%] w-[36.4%] text-[10px] text-center bg-edit">
            内容を編集
          </button>
        </div>
      </div>
    </div>
  );
};
