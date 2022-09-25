import { Context } from "../context";
import { signInByAuth0 } from "./_signInByAuth0";
import { signOut } from "./_signOut";

export const builder = (context: Readonly<Context>) => {
  return {
    signInByAuth0: signInByAuth0(context),
    signOut: signOut(context),
  } as const;
};
