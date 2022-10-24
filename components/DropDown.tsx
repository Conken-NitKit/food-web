import { useState } from "react";
import { TabItems } from "./tab-components";
import { useEffect, useCallback } from "react";
import { useGlobalClickEvent } from "../components/hooks/useGlobalClickEvent";
interface Props {
  text: string;
  items: string[];
  setState: (value: string) => void;
}
const DropDown = (props: Props): JSX.Element => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("全て表示");

  const closeDropDown = useCallback(() => {
    if (dropDownOpen) {
      setDropDownOpen(false);
    }
  }, [dropDownOpen]);
  useGlobalClickEvent(closeDropDown);

  return (
    <div className="flex">
      <div className="opacity-[0.4] whitespace-nowrap">{props.text}</div>
      <div className="ml-[10px]">
        <div className="flex w-[100px]">
          <div
            className="ml-[10px] whitespace-nowrap"
            onClick={() => {
              setDropDownOpen(true);
            }}
          >
            {selectedItem}
          </div>
          {dropDownOpen ? (
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
          ) : (
            <div
              onClick={() => {
                setDropDownOpen(true);
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
          )}
          {dropDownOpen && (
            <div className="ml-[30px] absolute z-10 rounded-2xl shadow-dropDown mt-[30px]">
              <div className="w-[120px] h-[16px] rounded-t-2xl bg-primary-regular "></div>
              <div className="w-[120px] h-[30px] bg-primary-regular hover:bg-secondary-dark-regular">
                <div
                  className="ml-[20px]"
                  onClick={() => {
                    setSelectedItem("全て表示");
                  }}
                >
                  全て表示
                </div>
              </div>
              <ul>
                {Object.values(props.items).map((item) => (
                  <li
                    key={item}
                    className="w-[120px] h-[30px] bg-primary-regular hover:bg-secondary-dark-regular"
                  >
                    <div
                      onClick={() => {
                        setSelectedItem(item);
                      }}
                      className="ml-[20px]"
                    >
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="w-[120px] h-[16px] rounded-b-2xl bg-primary-regular "></div>
            </div>
          )}
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
