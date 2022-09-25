import { AuthRepository } from "../repository/_auth";
import { Usecase } from "./interface";

/**
 * @description
 * Note: サインアウトのユースケースを生成するのに必要な Context 情報を示した抽象クラスです
 * Note: ../context.ts 内の Context を使うと、このファイルが ../context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract repositories: {
    auth: AuthRepository;
  };
}

/**
 * @description
 * authRepository.signOut を実行する関数です
 */
export const signOut = (
  context: Readonly<Context>
): Usecase<
  Parameters<AuthRepository["signOut"]>,
  ReturnType<AuthRepository["signOut"]>
> => {
  const authRepository = context.repositories.auth;
  return async (...signOutParams) => {
    const result = await authRepository.signOut(...signOutParams);
    return result;
  };
};
