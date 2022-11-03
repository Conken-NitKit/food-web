import { useState, useCallback } from "react";
import { useGlobalClickEvent } from "../components/hooks/useGlobalClickEvent";

export interface Item {
  id: string;
  label: string;
}

interface Props {
  label: string;
  items: Item[];
  onChange: (item: Item) => void;
}

const DropDown = ({ label, items, onChange }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);

  const onButtonClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const createItemClickHandler = useCallback(
    (item: Item) => {
      return () => {
        setSelectedItem(item);
        onChange(item);
      };
    },
    [setSelectedItem, onChange]
  );

  const handleGlobalClick = useCallback(() => {
    if (!isOpen) {
      return;
    }
    setIsOpen(false);
  }, [isOpen]);

  useGlobalClickEvent(handleGlobalClick);

  return (
    <div className="flex">
      <div className="opacity-[0.4] whitespace-nowrap">{label}</div>
      <div className="ml-[10px]">
        <div className="flex w-[100px]">
          <div className="flex" onClick={onButtonClick}>
            <div className="ml-[10px] whitespace-nowrap">
              {selectedItem.label}
            </div>
            {isOpen ? (
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
              <div>
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
          </div>
          {isOpen && (
            <div className="absolute mt-[30px] ml-[30px] py-[16px] z-10 rounded-2xl shadow-2xl bg-primary-regular">
              <ul>
                {Object.values(items).map((item) => (
                  <li
                    key={item.id}
                    className="w-[120px] h-[30px] hover:bg-secondary-dark-regular"
                  >
                    <div
                      onClick={createItemClickHandler(item)}
                      className="ml-[20px]"
                    >
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
