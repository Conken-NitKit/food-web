import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export const ChosenContext = createContext<{
  chosenItem: string;
  setChosenItem: Dispatch<SetStateAction<string>>;
}>({ chosenItem: "", setChosenItem: () => {} });
