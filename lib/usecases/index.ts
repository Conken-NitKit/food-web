import { Context } from "../context";
import { generateSignInByAuth0 } from "./_signInByAuth0";
import { generateSignOut } from "./_signOut";
import { generateVerifyAuthUser } from "./_verifyAuthUser";

export type { SignInByAuth0 } from "./_signInByAuth0";
export type { SignOut } from "./_signOut";
export type { VerifyAuthUser } from "./_verifyAuthUser";

/**
 * @description
 * Usecase に追加する Repository を生成するファクトリ関数です
 */
export const builder = (context: Readonly<Context>) => {
  return {
    signInByAuth0: generateSignInByAuth0(context),
    signOut: generateSignOut(context),
    verifyAuthUser: generateVerifyAuthUser(context),
  } as const;
};
