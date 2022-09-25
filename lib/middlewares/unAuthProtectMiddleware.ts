import { getToken } from "next-auth/jwt";
import { ComposableMiddleware } from "next-compose-middleware";
import { NextResponse } from "next/server";
import {
  redirectActions,
  RedirectAction,
} from "../../constants/redirectActions";
import { withMiddlewareLogger } from "./_utils";

/**
 * @param isEnableAuth 認証が必要かどうか
 * @param secret next-authのsecret
 * @param isDebug デバッグモードかどうか
 * @param whenUnAuthn 認証が必要なページに認証されていないユーザーがアクセスした際の挙動
 * @param appPageURL 認証が必要なページに認証されていないユーザーがアクセスした際にリダイレクトするURL
 * @param signInPageURL 認証が必要なページに認証されていないユーザーがアクセスした際にリダイレクトするURL
 */
export type unAuthProtectMiddlewareOption = {
  isEnableAuth?: boolean;
  secret?: string;
  isDebug?: boolean;
  whenAuthn: RedirectAction;
  appPageURL?: string;
  signInPageURL?: string;
};

/**
 * @description
 * サインインページなどの非ログインじのみアクセス可能なページにログイン済みのユーザーがアクセスした際の挙動を決定するミドルウェアを生成するファクトリ関数です
 */
export const generateUnAuthProtectMiddleware: (
  option: unAuthProtectMiddlewareOption
) => ComposableMiddleware = ({ isDebug, ...option }) => {
  const middleware: ComposableMiddleware = async (req, res, { breakAll }) => {
    if (!option.isEnableAuth) {
      return res;
    }
    const token = await getToken({ req, secret: option.secret });
    if (!token) {
      console.log("認証されていないユーザーがアクセスしました");
      return res;
    }

    if (isDebug) {
      const to = {
        [redirectActions.REDIRECT_TO_SIGN_IN]: option.signInPageURL,
        [redirectActions.REDIRECT_TO_TOP]: option.appPageURL,
        [redirectActions.NOT_FOUND]: "404",
        [redirectActions.NO_REDIRECT]: "NOT_REDIRECT",
      }[option.whenAuthn];
      if (to === "NOT_REDIRECT") {
        console.log("認証済みの場合もリダイレクトしません");
      } else if (to) {
        console.log(`認証済みのため、 ${to} にリダイレクトします`);
      } else {
        console.error(
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

  return withMiddlewareLogger(middleware, "generateNextAuthMiddleware", {
    shouldConsole: isDebug,
  });
};
