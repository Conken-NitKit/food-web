import { ComposableMiddleware } from "next-compose-middleware";

export type TransitObserverOption = {
  locale?: string;
  shouldConsole?: boolean;
};

/**
 * middlewareを通過した際に、どのmiddlewareが通過したかをconsole.logで出力する
 * @param middleware 監視対象のmiddleware
 * @param middlewareName middlewareの名前
 * @param option
 * @param option.locale ロケール
 * @param option.shouldConsole console.logを出力するかどうか
 * @returns 通過時にconsole.logを出力するmiddleware
 */
export const withMiddlewareLogger = (
  middleware: ComposableMiddleware,
  middlewareName: string,
  { shouldConsole = false, locale = "ja" }: TransitObserverOption = {}
): ComposableMiddleware => {
  return (req, ...args) => {
    if (shouldConsole) {
      const now = new Date();
      console.log("現在のパス: ", req.nextUrl.pathname);
      console.log(
        `[${now.toLocaleString(locale)}] ${middlewareName} を通過しました`
      );
    }
    return middleware(req, ...args);
  };
};
