import { useState } from "react";
import { TabItems } from "./tab-components";
import { useEffect } from "react";

interface Props {
  text: string;
  items: string[];
  setState: (value: string) => void;
}
const DropDown = (props: Props): JSX.Element => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("全て表示");
  const changeDropDownState = () => {
    if (dropDownOpen) {
      setDropDownOpen(false);
    } else {
      setDropDownOpen(true);
    }
  };
  const closeDropDown = () => {
    if (dropDownOpen) {
      setDropDownOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", closeDropDown);
    return () => window.removeEventListener("click", closeDropDown);
  }, []);

  return (
    <div className="flex">
      <div className="opacity-[0.4]">ユーザーでフィルタ</div>
      <div className="ml-[10px]">
        <div className="flex w-[100px]">
          <div
            className="ml-[10px] whitespace-nowrap"
            onClick={() => {
              changeDropDownState();
            }}
          >
            {selectedItem}
          </div>
          <div
            onClick={() => {
              changeDropDownState();
            }}
          >
            {dropDownOpen ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M368 368L144 144M368 144L144 368"
                  />
                </svg>
                <div>aaa</div>
                <div className="absolute z-10 ">
                  <div className="bg-monitoring-product hover:bg-secondary-dark-regular shadow-dropDown"></div>
                </div>
              </div>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 8.625L12 15.375L18.75 8.625"
                  stroke="#2D0D0D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {/* <div className="opacity-[0.4] ">ユーザーでフィルタ</div>
        <div className="ml-[10px]">
          <div className="flex w-[100px]">
            <div
              className="ml-[10px]"
              onClick={() => {
                setUserDropDown(true);
              }}
            >
              {userFilter}
            </div>
            <div
              onClick={() => {
                setUserDropDown(true);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 8.625L12 15.375L18.75 8.625"
                  stroke="#2D0D0D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div><div className="absolute mt-[5px] z-10 rounded-2xl shadow-dropDown">
          <div className="w-[75px] h-[10px] bg-primary-regular rounded-t-2xl"></div>
          <div
            className="w-[75px] h-[20px] bg-primary-regular hover:bg-secondary-dark-regular"
            onClick={() => {
              setUserFilter("全て表示");
            }}
          >
            <div className="ml-[8px]">全て表示</div>
          </div>
          {removeDuplicationValues(
            operationCard.map((item) => item.user.name)
          ).map((item) => {
            return (
              <div
                className="w-[75px] h-[25px] bg-primary-regular hover:bg-secondary-dark-regular"
                key={item}
                onClick={() => {
                  setUserFilter(item);
                }}
              >
                <div className="mx-[8px]">{item}</div>
              </div>
            );
          })}
          <div className="w-[75px] h-[10px] bg-primary-regular rounded-b-2xl"></div>
        </div> */}
    </div>
  );
};

export default DropDown;
