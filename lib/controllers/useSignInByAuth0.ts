import { signIn as nextAuthSignIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { OmitFirstParameters } from "../../types/util";
import { SignInByAuth0 } from "../usecases";

/**
 * @description
 * Note: カスタムフックを実行するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract usecases: {
    signInByAuth0: ReturnType<SignInByAuth0>;
  };
}

export const useSignInByAuth0 = (context: Context) => {
  const router = useRouter();
  const { signInByAuth0: signInByAuth0Usecase } = context.usecases;

  const signInByAuth0 = useCallback(
    async (...params: OmitFirstParameters<typeof signInByAuth0Usecase>) => {
      await signInByAuth0Usecase(
        {
          router,
          nextAuthSignIn,
        },
        ...params
      );
    },
    [signInByAuth0Usecase, router]
  );

  return {
    signInByAuth0,
  } as const;
};
