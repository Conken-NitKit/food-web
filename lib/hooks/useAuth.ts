import { useRouter } from "next/router";
import { useCallback } from "react";
import { OmitFirstParameters } from "../../types/util";
import { signInByAuth0 } from "../usecase/_signInByAuth0";
import { signOut } from "../usecase/_signOut";

export abstract class Context {
  abstract usecases: {
    signInByAuth0: ReturnType<typeof signInByAuth0>;
    signOut: ReturnType<typeof signOut>;
  };
}

export const useAuth = (context: Context) => {
  const router = useRouter();
  const { signInByAuth0, signOut } = context.usecases;

  const _signInByAuth0 = useCallback(
    async (...params: OmitFirstParameters<typeof signInByAuth0>) => {
      await signInByAuth0(router, ...params);
    },
    [signInByAuth0, router]
  );

  const _signOut = useCallback(
    async (...params: OmitFirstParameters<typeof signOut>) => {
      await signOut(router, ...params);
    },
    [signOut, router]
  );

  return {
    signInByAuth0: _signInByAuth0,
    signOut: _signOut,
  } as const;
};
