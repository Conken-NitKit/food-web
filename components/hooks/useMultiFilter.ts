import { useCallback, useMemo, useState } from "react";

export type UseMultiFilterOptions = {
  defaultIndex?: number;
};

export const useMultiFilter = <T>(
  targets: T[],
  filters: ((target: T) => boolean)[],
  { defaultIndex = 0 }: UseMultiFilterOptions = {}
) => {
  const [index, setIndex] = useState(defaultIndex);

  const changeFilter = useCallback(
    (idx: number) => {
      setIndex(idx);
    },
    [filters]
  );

  const filteredTargets = useMemo(() => {
    return targets.filter(filters[index]);
  }, [index, targets]);

  return [filteredTargets, changeFilter] as const;
};
