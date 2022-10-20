import { useEffect } from "react";

export const useGlobalClickEvent = (event: VoidFunction) => {
  useEffect(() => {
    document.addEventListener("click", event);
    return () => document.removeEventListener("click", event);
  }, [event]);
};
