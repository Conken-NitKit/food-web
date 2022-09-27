import { signOut as nextAuthSignOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { OmitFirstParameters } from "../../types/util";
import { signOut } from "../usecases/_signOut";

/**
 * @description
 * Note: カスタムフックを実行するのに必要な Context 情報を示した抽象クラスです
 * Note: lib/context.ts 内の Context を使うと、このファイルが lib/context.ts に依存してしまうので、抽象クラスを定義しています
 */
export abstract class Context {
  abstract usecases: {
    signOut: ReturnType<typeof signOut>;
  };
}

/**
 * 認証関連のユースケースをまとめたカスタムフックです
 */
export const useSignOut = (context: Context) => {
  const router = useRouter();
  const { signOut: signOutUsecase } = context.usecases;

  const signOut = useCallback(
    async (...params: OmitFirstParameters<typeof signOutUsecase>) => {
      await signOutUsecase(
        {
          router,
          nextAuthSignOut,
        },
        ...params
      );
    },
    [signOutUsecase, router]
  );

  return {
    signOut,
  } as const;
};
