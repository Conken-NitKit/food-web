import { AuthRepository } from "../repositories";
import { Usecase } from "./interface";

/**
 * @description
 * Note: サインアウトのユースケースを生成するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract repositories: {
    auth: AuthRepository;
  };
}

export type SignOut = Usecase<
  Parameters<AuthRepository["signOut"]>,
  ReturnType<AuthRepository["signOut"]>
>;

/**
 * @description
 * authRepository.signOut を実行する関数です
 */
export const generateSignOut = (context: Readonly<Context>): SignOut => {
  const authRepository = context.repositories.auth;
  return async (...signOutParams) => {
    const result = await authRepository.signOut(...signOutParams);
    return result;
  };
};
