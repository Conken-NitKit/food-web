import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export const ChosenItemContext = createContext<{
  chosenItem: string;
  setChosenItem: Dispatch<SetStateAction<string>>;
}>({ chosenItem: "", setChosenItem: () => {} });
