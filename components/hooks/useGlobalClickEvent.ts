import { useEffect } from "react";

export const useGlobalClickEvent = (event: VoidFunction) => {
  useEffect(() => {
    window.addEventListener("click", event);
    return () => window.removeEventListener("click", event);
  }, [event]);
};
