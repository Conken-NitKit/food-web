import { useState, useCallback } from "react";
import { useGlobalClickEvent } from "../components/hooks/useGlobalClickEvent";
import { CloseIcon } from "./icons/CloseIcon";
import { ChevronDownIcon } from "./icons/ChevronDown";

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
      <div className="flex w-[100px] ml-[10px]">
        <div className="flex" onClick={onButtonClick}>
          <div className="ml-[10px] whitespace-nowrap">
            {selectedItem.label}
          </div>
          <div>{isOpen ? <CloseIcon /> : <ChevronDownIcon />}</div>
        </div>
        {isOpen && (
          <div className="absolute mt-[30px] ml-[30px] py-[16px] z-10 rounded-2xl shadow-2xl bg-primary-regular">
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="w-[120px] h-[30px] pl-[20px] hover:bg-secondary-dark-regular"
                  onClick={createItemClickHandler(item)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
