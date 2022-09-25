import { useCallback, useState } from "react";

/**
 * フラグを切り替えるカスタムフックです
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    const newValue = !value;
    setValue(newValue);
    return newValue;
  }, [value]);

  return [value, toggle] as const;
};
