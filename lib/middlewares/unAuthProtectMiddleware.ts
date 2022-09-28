import { ComposableMiddleware } from "next-compose-middleware";
import { NextResponse } from "next/server";
import {
  redirectActions,
  RedirectAction,
} from "../../constants/redirectActions";
import { Logger } from "../../types/logger";
import { VerifyAuthUser } from "../usecases";
import { withMiddlewareLogger } from "./_utils";

/**
 * @description
 * Note: カスタムフックを実行するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract isBrowser: boolean;
  abstract logger: Logger;
  abstract publicConfig: {
    isEnableAuth: boolean;
    isDebug: boolean;
  };
  abstract usecases: {
    verifyAuthUser: ReturnType<VerifyAuthUser>;
  };
}

/**
 * @param secret next-authのsecret
 * @param whenUnAuthn 認証が必要なページに認証されていないユーザーがアクセスした際の挙動
 * @param appPageURL 認証が必要なページに認証されていないユーザーがアクセスした際にリダイレクトするURL
 * @param signInPageURL 認証が必要なページに認証されていないユーザーがアクセスした際にリダイレクトするURL
 */
export type unAuthProtectMiddlewareOption = {
  secret?: string;
  whenAuthn: RedirectAction;
  appPageURL?: string;
  signInPageURL?: string;
};

/**
 * @description
 * サインインページなどの非ログインじのみアクセス可能なページにログイン済みのユーザーがアクセスした際の挙動を決定するミドルウェアを生成するファクトリ関数です
 */
export const generateUnAuthProtectMiddleware: (
  context: Context,
  option: unAuthProtectMiddlewareOption
) => ComposableMiddleware = (context, { ...option }) => {
  const middleware: ComposableMiddleware = async (req, res) => {
    if (context.isBrowser || !context.publicConfig.isEnableAuth) {
      return res;
    }

    const { verifyAuthUser } = context.usecases;
    const isValid = await verifyAuthUser({ req });
    if (!isValid) {
      context.logger.debug("認証されていないユーザーがアクセスしました");
      return res;
    }

    if (context.publicConfig.isDebug) {
      const to = {
        [redirectActions.REDIRECT_TO_SIGN_IN]: option.signInPageURL,
        [redirectActions.REDIRECT_TO_TOP]: option.appPageURL,
        [redirectActions.NOT_FOUND]: "404",
        [redirectActions.NO_REDIRECT]: "NOT_REDIRECT",
      }[option.whenAuthn];
      if (to === "NOT_REDIRECT") {
        context.logger.debug("認証済みの場合もリダイレクトしません");
      } else if (to) {
        context.logger.debug(`認証済みのため、 ${to} にリダイレクトします`);
      } else {
        context.logger.error(
          `認証に失敗しましたが、リダイレクト先が定義されていません`
        );
      }
    }

    switch (option.whenAuthn) {
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
      case redirectActions.NO_REDIRECT:
        return res;
    }
  };

  return withMiddlewareLogger(
    middleware,
    "nextUnAuthMiddleware",
    context.logger
  );
};
