import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export const ChosenContext = createContext<{
  chosen: string;
  setChosen: Dispatch<SetStateAction<string>>;
}>({ chosen: "", setChosen: () => {} });
