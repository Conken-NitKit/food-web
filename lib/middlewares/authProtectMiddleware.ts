import { getToken } from "next-auth/jwt";
import { ComposableMiddleware } from "next-compose-middleware";
import { NextResponse } from "next/server";
import {
  redirectActions,
  RedirectAction,
} from "../../constants/redirectActions";
import { withMiddlewareLogger } from "./_utils";

/**
 * @description
 * Note: カスタムフックを実行するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract isBrowser: boolean;
  abstract publicConfig: {
    isEnableAuth: boolean;
    isDebug: boolean;
  };
}

/**
 * @param secret next-authのsecret
 * @param whenUnAuthn 認証が必要なページに認証されていないユーザーがアクセスした際の挙動
 * @param appPageURL 認証が必要なページに認証されていないユーザーがアクセスした際にリダイレクトするURL
 * @param signInPageURL 認証が必要なページに認証されていないユーザーがアクセスした際にリダイレクトするURL
 */
export type authProtectMiddlewareOption = {
  secret?: string;
  whenUnAuthn: Exclude<RedirectAction, typeof redirectActions.NO_REDIRECT>;
  appPageURL?: string;
  signInPageURL?: string;
};

/**
 * @description
 * 認証が必要なページに認証されていないユーザーがアクセスした際の挙動を決定するミドルウェアを生成するファクトリ関数です
 */
export const generateAuthProtectMiddleware: (
  context: Context,
  option: authProtectMiddlewareOption
) => ComposableMiddleware = (context, { ...option }) => {
  const middleware: ComposableMiddleware = async (req, res) => {
    if (context.isBrowser || !context.publicConfig.isEnableAuth) {
      return res;
    }

    const token = await getToken({ req, secret: option.secret });
    if (token) {
      return res;
    }

    if (context.publicConfig.isDebug) {
      const to = {
        [redirectActions.REDIRECT_TO_SIGN_IN]: option.signInPageURL,
        [redirectActions.REDIRECT_TO_TOP]: option.appPageURL,
        [redirectActions.NOT_FOUND]: "404",
      }[option.whenUnAuthn];
      if (to) {
        console.log(`認証に失敗したため、 ${to} にリダイレクトします`);
      } else {
        console.error(
          `認証に失敗しましたが、リダイレクト先が定義されていません`
        );
      }
    }

    switch (option.whenUnAuthn) {
      case redirectActions.REDIRECT_TO_TOP:
        if (!option.appPageURL) {
          throw new Error(
            "whenUnAuthn を REDIRECT_TO_TOP に設定する場合は、appPageURL を設定してください"
          );
        }
        return NextResponse.redirect(option.appPageURL);
      case redirectActions.REDIRECT_TO_SIGN_IN:
        if (!option.signInPageURL) {
          throw new Error(
            "whenUnAuthn を REDIRECT_TO_SIGN_IN に設定する場合は、signInPageURL を設定してください"
          );
        }
        return NextResponse.redirect(option.signInPageURL);
      case redirectActions.NOT_FOUND:
        const url = req.nextUrl;
        url.pathname = "/404";
        return NextResponse.rewrite(url);
    }
  };

  return withMiddlewareLogger(middleware, "nextAuthMiddleware", {
    shouldConsole: context.publicConfig.isDebug,
  });
};
