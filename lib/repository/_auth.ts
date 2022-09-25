import {
  signIn as nextAuthSignIn,
  SignInResponse as NextAuthSignInResponse,
  signOut as nextAuthSignOut,
  SignOutResponse as NextAuthSignOutResponse,
} from "next-auth/react";
import type { NextRouter } from "next/router";
import { OmitFirstParameters } from "../../types/util";
import { applyLoggerToMethods } from "../util/logger";
import { Repository, RepositoryGenerator } from "./interface";

/**
 * @description
 * Note: 認証関連のリポジトリを生成するのに必要な Context 情報を示した抽象クラスです
 * Note: ../context.ts 内の Context を使うとこのファイルが ../context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract publicConfig: {
    isEnableAuth: boolean;
    isDebug: boolean;
  };
}

/**
 * @description
 * signInCallbackURL: サインイン後にリダイレクトするURL
 * signOutCallbackURL: サインアウト後にリダイレクトするURL
 */
export type AuthOption = {
  signInCallbackURL: string;
  signOutCallbackURL: string;
};

export interface AuthRepository extends Repository {
  signInByAuth0: (
    router: NextRouter,
    ...params: OmitFirstParameters<typeof nextAuthSignIn>
  ) => ReturnType<typeof nextAuthSignIn>;
  signOut: (
    router: NextRouter,
    ...options: Parameters<typeof nextAuthSignOut>
  ) => ReturnType<typeof nextAuthSignOut>;
}

/**
 * @description
 * 認証関連のリポジトリを生成するファクトリ関数です
 */
export const generateAuthRepository: RepositoryGenerator<
  Context,
  AuthOption,
  AuthRepository
> = (context, { signInCallbackURL, signOutCallbackURL }) => {
  const signInByAuth0: AuthRepository["signInByAuth0"] = async (
    router,
    options,
    authenticationParams
  ) => {
    // Note: 認証機能が無効な場合は単純なリダイレクトを行う
    if (!context.publicConfig.isEnableAuth) {
      // Note: options.redirect が false の場合は、どこにもリダイレクトしない
      if (options?.redirect) {
        return;
      }
      const ok = await router.push(signInCallbackURL);

      // Note: リダイレクトに成功した場合は、next-auth の成功時のレスポンスと同じ型のオブジェクトを返す
      // Note: リダイレクトに失敗した場合は、next-auth の失敗時のレスポンスと同じ型のオブジェクトを返す
      const response: NextAuthSignInResponse = ok
        ? {
            ok,
            status: 200,
            error: undefined,
            url: signInCallbackURL,
          }
        : {
            ok,
            status: 400,
            error: "Failed to redirect to sign in page",
            url: signInCallbackURL,
          };
      return response;
    }

    const response = await nextAuthSignIn(
      "auth0",
      {
        callbackUrl: signInCallbackURL,
        ...options,
      },
      authenticationParams
    );
    return response;
  };

  const signOut: AuthRepository["signOut"] = async (router, options) => {
    // Note: 認証機能が無効な場合は単純なリダイレクトを行う
    if (!context.publicConfig.isEnableAuth) {
      // Note: options.redirect が false の場合は、どこにもリダイレクトしない
      if (options?.redirect) {
        return;
      }
      await router.push(signOutCallbackURL);

      // Note: next-auth のレスポンスと同じ型のオブジェクトを返す
      const response: NextAuthSignOutResponse = {
        url: options?.callbackUrl ?? signOutCallbackURL,
      };
      return response;
    }

    return nextAuthSignOut({
      callbackUrl: signOutCallbackURL,
      ...options,
    });
  };

  return applyLoggerToMethods(
    {
      signInByAuth0,
      signOut,
    },
    {
      shouldConsole: context.publicConfig.isDebug,
    }
  );
};
