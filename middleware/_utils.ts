import { ComposableMiddleware } from "next-compose-middleware";

export type TransitObserverOption = {
  locale?: string;
  shouldConsole?: boolean;
};

// NOTE: middlewareを通過した際に、どのmiddlewareが通過したかをconsole.logで出力する
export const withTransitObserver = (
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
