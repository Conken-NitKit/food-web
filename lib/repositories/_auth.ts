import {
  signIn as nextAuthSignInForReact,
  signOut as nextAuthSignOutForReact,
} from "next-auth/react";
import type {
  SignInResponse as NextAuthSignInResponse,
  SignOutResponse as NextAuthSignOutResponse,
} from "next-auth/react";
import type { NextRouter } from "next/router";
import { OmitFirstParameters } from "../../types/util";
import { applyLoggerToMethods } from "../utils/logger";
import { Repository, RepositoryGenerator } from "./interface";
import { Logger } from "../../types/logger";

/**
 * @description
 * Note: 認証関連のリポジトリを生成するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract logger: Logger;
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

type NextAuthSignInForReact = typeof nextAuthSignInForReact;
type NextAuthSignOutForReact = typeof nextAuthSignOutForReact;

// Hack: react のコンポーネント外で next-auth/react の関数を使うと、ビルド時にエラーが発生します。
// Hack: そのため、呼び出す側でそれらの関数を注入してもらい、この関数内で呼び出すようにしています。
export interface AuthRepository extends Repository {
  signInByAuth0: (
    injections: {
      router: NextRouter;
      nextAuthSignIn: NextAuthSignInForReact;
    },
    ...params: OmitFirstParameters<NextAuthSignInForReact>
  ) => ReturnType<NextAuthSignInForReact>;
  signOut: (
    injections: {
      router: NextRouter;
      nextAuthSignOut: NextAuthSignOutForReact;
    },
    ...params: Parameters<NextAuthSignOutForReact>
  ) => ReturnType<NextAuthSignOutForReact>;
}

/**
 * @description
 * 認証機能が無効な場合の signInByAuth0 のダミー関数です
 */
const _generateDummySignInByAuth0Dummy = (
  _: Context,
  { signInCallbackURL }: Pick<AuthOption, "signInCallbackURL">
): AuthRepository["signInByAuth0"] => {
  return async ({ router }, options) => {
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
  };
};

/**
 * @description
 * 認証機能が無効な場合の signOut のダミー関数です
 */
const _generateDummySignOutDummy = (
  _: Context,
  { signOutCallbackURL }: Pick<AuthOption, "signOutCallbackURL">
): AuthRepository["signOut"] => {
  return async ({ router }, options) => {
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
  };
};

/**
 * @description
 * 認証関連のリポジトリを生成するファクトリ関数です
 */
export const generateAuthRepository: RepositoryGenerator<
  Context,
  AuthOption,
  AuthRepository
> = (context, { signInCallbackURL, signOutCallbackURL }) => {
  const signInByAuth0: AuthRepository["signInByAuth0"] = async (...params) => {
    // Note: 認証機能が無効な場合はダミーの関数を返す
    if (!context.publicConfig.isEnableAuth) {
      const dummyMethod = _generateDummySignInByAuth0Dummy(context, {
        signInCallbackURL,
      });
      const response = await dummyMethod(...params);
      return response;
    }

    const [{ nextAuthSignIn }, options, authenticationParams] = params;
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

  const signOut: AuthRepository["signOut"] = async (...params) => {
    // Note: 認証機能が無効な場合は単純なリダイレクトを行う
    if (!context.publicConfig.isEnableAuth) {
      const dummyMethod = _generateDummySignOutDummy(context, {
        signOutCallbackURL,
      });
      const response = await dummyMethod(...params);
      return response;
    }

    const [{ nextAuthSignOut }, options] = params;
    const response = nextAuthSignOut({
      callbackUrl: signOutCallbackURL,
      ...options,
    });

    return response;
  };

  return applyLoggerToMethods(
    {
      signInByAuth0,
      signOut,
    },
    context.logger
  );
};
