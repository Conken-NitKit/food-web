import { ComposableMiddleware } from "next-compose-middleware";
import { Logger } from "../../types/logger";

export type MiddlewareLoggerOption = {
  locale?: string;
};

/**
 * middlewareを通過した際に、どのmiddlewareが通過したかをlogで出力する
 * @param middleware 監視対象のmiddleware
 * @param middlewareName middlewareの名前
 * @param logger
 * @param option
 * @returns 通過時にlogを出力するmiddleware
 */
export const withMiddlewareLogger = (
  middleware: ComposableMiddleware,
  middlewareName: string,
  logger: Logger | Console,
  { locale = "ja" }: MiddlewareLoggerOption = {}
): ComposableMiddleware => {
  return (req, ...args) => {
    const now = new Date();
    logger.debug("現在のパス: ", req.nextUrl.pathname);
    logger.debug(
      `[${now.toLocaleString(locale)}] ${middlewareName} を通過しました`
    );
    return middleware(req, ...args);
  };
};
