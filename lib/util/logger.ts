/**
 * @param locale ロケール
 * @param shouldConsole console.logを出力するかどうか
 */
export type MethodLoggerOption = {
  locale?: string;
  shouldConsole?: boolean;
};

/**
 * メソッドを実行した際に、どのメソッドが実行されたかをconsole.logで出力する
 * @param method 監視対象のメソッド
 * @param methodName メソッドの名前
 * @param option
 */
export const withMethodLogger = <T extends (...args: any[]) => any>(
  method: T,
  methodName: string,
  { shouldConsole = false, locale = "ja" } = {}
): T => {
  const _method = (...args: Parameters<T>) => {
    const result = method(...args);
    if (shouldConsole) {
      const now = new Date();
      console.log(
        `[${now.toLocaleString(locale)}] ${methodName} を実行しました。`
      );
      console.log(`[${methodName}] 引数: `, args);
      console.log(`[${methodName}] 実行結果: `, result);
    }
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
  option: MethodLoggerOption = {}
): T => {
  const keys = Object.keys(methods) as (keyof T)[];
  const _methods = keys.reduce((acc, key) => {
    const method = methods[key];
    acc[key] = withMethodLogger(method, String(key), option);
    return acc;
  }, {} as T);

  return _methods;
};
