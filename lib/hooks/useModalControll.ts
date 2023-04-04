import { useState } from "react";

export const useModalControll = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
  } as const;
};
