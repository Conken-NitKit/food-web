import { Context } from "../context";
import { signInByAuth0 } from "./_signInByAuth0";
import { signOut } from "./_signOut";

/**
 * @description
 * Usecase に追加する Repository を生成するファクトリ関数です
 */
export const builder = (context: Readonly<Context>) => {
  return {
    signInByAuth0: signInByAuth0(context),
    signOut: signOut(context),
  } as const;
};
