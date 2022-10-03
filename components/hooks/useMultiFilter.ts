import { useCallback, useMemo, useState } from "react";

export type UseMultiFilterOptions = {
  defaultIndex?: number;
};

export const useMultiFilter = <T>(
  targets: T[],
  filters: ((target: T) => boolean)[],
  { defaultIndex = 0 }: UseMultiFilterOptions = {}
) => {
  const [currentFilter, setCurrentFilter] = useState<typeof filters[0]>(
    () => filters[defaultIndex]
  );

  const changeFilter = useCallback(
    (idx: number) => {
      console.log("changed");

      setCurrentFilter(() => filters[idx]);
    },
    [filters]
  );

  const filteredTargets = useMemo(() => {
    console.log("filtering");

    return targets.filter(currentFilter);
  }, [currentFilter, targets]);

  return [filteredTargets, changeFilter] as const;
};
