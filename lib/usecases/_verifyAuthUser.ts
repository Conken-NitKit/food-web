import { AuthRepository } from "../repositories";
import { Usecase } from "./interface";

/**
 * @description
 * Note: ユーザー検証のユースケースを生成するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract repositories: {
    auth: AuthRepository;
  };
}

/**
 * @description
 * 有効なユーザーであるかどうかを確認するユースケースを生成する関数です
 */
export const verifyAuthUser = (
  context: Readonly<Context>
): Usecase<Parameters<AuthRepository["verifyToken"]>, Promise<boolean>> => {
  const authRepository = context.repositories.auth;
  return async (...signInByAuth0Params) => {
    const token = await authRepository.verifyToken(...signInByAuth0Params);

    // TODO: 現在はトークンの有効性のみを確認しているが、バックエンドができたら、ユーザーの有効性も確認する
    return !!token;
  };
};
