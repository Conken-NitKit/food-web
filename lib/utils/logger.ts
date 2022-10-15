import { Logger } from "../../types/logger";

/**
 * @param locale ロケール
 */
export type MethodLoggerOption = {
  locale?: string;
};

/**
 * メソッドを実行した際に、どのメソッドが実行されたかをlogに出力する
 * @param method 監視対象のメソッド
 * @param methodName メソッドの名前
 * @param option
 */
export const withMethodLogger = <T extends (...args: any[]) => any>(
  method: T,
  methodName: string,
  logger: Logger | Console,
  { locale = "ja" }: MethodLoggerOption = {}
): T => {
  const _method = (...args: Parameters<T>) => {
    const result = method(...args);
    const now = new Date();
    logger.debug(
      `[${now.toLocaleString(locale)}] ${methodName} を実行しました。`
    );
    logger.debug(`[${methodName}] 引数: `, args);
    logger.debug(`[${methodName}] 実行結果: `, result);
    return result;
  };
  return _method as T;
};

/**
 * オブジェクト内のメソッドを全てに withMethodLogger を適用する
 * @param obj withMethodLogger を適用する対象のオブジェクト
 * @param option
 */
export const applyLoggerToMethods = <
  T extends { [key: string]: (...args: any[]) => any }
>(
  methods: T,
  logger: Logger | Console,
  option: MethodLoggerOption = {}
): T => {
  const keys = Object.keys(methods) as (keyof T)[];
  const _methods = keys.reduce((acc, key) => {
    const method = methods[key];
    acc[key] = withMethodLogger(method, String(key), logger, option);
    return acc;
  }, {} as T);

  return _methods;
};
