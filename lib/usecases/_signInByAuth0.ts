import { AuthRepository } from "../repositories";
import { Usecase } from "./interface";

/**
 * @description
 * Note: サインインのユースケースを生成するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract repositories: {
    auth: AuthRepository;
  };
}

export type SignInByAuth0 = Usecase<
  Parameters<AuthRepository["signInByAuth0"]>,
  ReturnType<AuthRepository["signInByAuth0"]>
>;

/**
 * @description
 * authRepository.signInByAuth0 を実行する関数です
 */
export const generateSignInByAuth0 = (
  context: Readonly<Context>
): SignInByAuth0 => {
  const authRepository = context.repositories.auth;
  return async (...signInByAuth0Params) => {
    const result = await authRepository.signInByAuth0(...signInByAuth0Params);
    return result;
  };
};
