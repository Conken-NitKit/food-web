import { Context } from "../context";
import { signInByAuth0 } from "./_signInByAuth0";
import { signOut } from "./_signOut";
import { verifyAuthUser } from "./_verifyAuthUser";

export type SignInByAuth0 = typeof signInByAuth0;
export type SignOut = typeof signOut;
export type VerifyAuthUser = typeof verifyAuthUser;

/**
 * @description
 * Usecase に追加する Repository を生成するファクトリ関数です
 */
export const builder = (context: Readonly<Context>) => {
  return {
    signInByAuth0: signInByAuth0(context),
    signOut: signOut(context),
    verifyAuthUser: verifyAuthUser(context),
  } as const;
};
