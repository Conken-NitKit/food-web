import { useState } from "react";
import { useCallback } from "react";
import { useGlobalClickEvent } from "../components/hooks/useGlobalClickEvent";
interface Props {
  text: string;
  items: string[];
  setState: (value: string) => void;
}
const DropDown = (props: Props): JSX.Element => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("全て表示");
  const dropDownOpen = () => {
    setIsDropDownOpen(true);
  };
  const changeSelectItem = (item: string) => {
    setSelectedItem(item);
    props.setState(item);
  };
  const closeDropDown = useCallback(() => {
    if (isDropDownOpen) {
      setIsDropDownOpen(false);
    }
  }, [isDropDownOpen]);
  useGlobalClickEvent(closeDropDown);

  return (
    <div className="flex">
      <div className="opacity-[0.4] whitespace-nowrap">{props.text}</div>
      <div className="ml-[10px]">
        <div className="flex w-[100px]">
          <div className="ml-[10px] whitespace-nowrap" onClick={dropDownOpen}>
            {selectedItem}
          </div>
          {isDropDownOpen ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Close</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </div>
          ) : (
            <div onClick={dropDownOpen}>
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
          {isDropDownOpen && (
            <div className="absolute mt-[30px] ml-[30px] z-10 rounded-2xl shadow-2xl">
              <div className="w-[120px] h-[16px] rounded-t-2xl bg-primary-regular "></div>
              <div className="w-[120px] h-[30px] bg-primary-regular hover:bg-secondary-dark-regular">
                <div
                  className="ml-[20px]"
                  onClick={() => {
                    changeSelectItem("全て表示");
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
                        changeSelectItem(item);
                      }}
                      className="ml-[20px]"
                    >
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="w-[120px] h-[16px] rounded-b-2xl bg-primary-regular"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
