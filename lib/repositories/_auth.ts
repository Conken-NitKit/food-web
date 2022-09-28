import {
  getToken as nextAuthGetToken,
  GetTokenParams,
  JWT,
} from "next-auth/jwt";
import {
  signIn as nextAuthSignInForReact,
  SignInAuthorizationParams as NextAuthSignInAuthorizationParams,
  SignInOptions as NextAuthSignInOptions,
  signOut as nextAuthSignOutForReact,
  SignOutParams as NextAuthSignOutParams,
} from "next-auth/react";
import type { NextRouter } from "next/router";
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
  abstract secretConfig: {
    nextAuth: {
      secret?: string;
    };
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
    option?: NextAuthSignInOptions,
    authorizationParams?: NextAuthSignInAuthorizationParams
  ) => void;
  signOut: (
    injections: {
      router: NextRouter;
      nextAuthSignOut: NextAuthSignOutForReact;
    },
    options?: NextAuthSignOutParams
  ) => void;
  verifyToken: (parmas: GetTokenParams) => Promise<string | JWT | null>;
}

/**
 * @description
 * 認証機能が無効な場合の signInByAuth0 のダミー関数です
 */
const _generateDummySignInByAuth0 = (
  _: Context,
  { signInCallbackURL }: Pick<AuthOption, "signInCallbackURL">
): AuthRepository["signInByAuth0"] => {
  return async ({ router }, options) => {
    // Note: options.redirect が false の場合は、どこにもリダイレクトしない
    if (options?.redirect) {
      return;
    }
    await router.push(signInCallbackURL);
  };
};

/**
 * @description
 * 認証機能が無効な場合の signOut のダミー関数です
 */
const _generateDummySignOut = (
  _: Context,
  { signOutCallbackURL }: Pick<AuthOption, "signOutCallbackURL">
): AuthRepository["signOut"] => {
  return async ({ router }, options) => {
    // Note: options.redirect が false の場合は、どこにもリダイレクトしない
    if (options?.redirect) {
      return;
    }
    await router.push(signOutCallbackURL);
  };
};

const DUMMY_JWT: JWT = {
  name: "dummy",
  email: "dummy",
  picture: "dummy",
  sub: "dummy",
};

const DUMMY_JWT_RAW = JSON.stringify(DUMMY_JWT);

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
    // Note: 認証機能が無効な場合はダミーの結果を返す
    if (!context.publicConfig.isEnableAuth) {
      const dummyMethod = _generateDummySignInByAuth0(context, {
        signInCallbackURL,
      });
      const response = await dummyMethod(...params);
      return response;
    }

    const [{ nextAuthSignIn }, options, authenticationParams] = params;

    nextAuthSignIn(
      "auth0",
      {
        callbackUrl: signInCallbackURL,
        ...options,
      },
      authenticationParams
    );
  };

  const signOut: AuthRepository["signOut"] = async (...params) => {
    // Note: 認証機能が無効な場合はダミーの結果を返す
    if (!context.publicConfig.isEnableAuth) {
      const dummyMethod = _generateDummySignOut(context, {
        signOutCallbackURL,
      });
      const response = await dummyMethod(...params);
      return response;
    }

    const [{ nextAuthSignOut }, options] = params;

    nextAuthSignOut({
      callbackUrl: signOutCallbackURL,
      ...options,
    });
  };

  const verifyToken: AuthRepository["verifyToken"] = async (params) => {
    // Note: 認証機能が無効な場合はダミーのトークンを返す
    if (!context.publicConfig.isEnableAuth) {
      return params.raw ? DUMMY_JWT_RAW : DUMMY_JWT;
    }
    const token = await nextAuthGetToken({
      secret: context.secretConfig.nextAuth.secret,
      ...params,
    });
    return token;
  };

  return applyLoggerToMethods(
    {
      signInByAuth0,
      signOut,
      verifyToken,
    },
    context.logger
  );
};
