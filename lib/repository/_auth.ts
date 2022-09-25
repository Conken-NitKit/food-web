import {
  signIn as nextAuthSignIn,
  SignInResponse as NextAuthSignInResponse,
  signOut as nextAuthSignOut,
  SignOutResponse as NextAuthSignOutResponse,
} from "next-auth/react";
import type { NextRouter } from "next/router";
import { OmitFirstParameters } from "../../types/util";
import { Context } from "../context";
import { applyLoggerToMethods } from "../util/logger";
import { Repository, RepositoryGenerator } from "./interface";

export interface AuthRepository extends Repository {
  signInByAuth0: (
    router: NextRouter,
    ...params: OmitFirstParameters<typeof nextAuthSignIn>
  ) => ReturnType<typeof nextAuthSignIn>;
  signOut: (
    router: NextRouter,
    ...options: Parameters<typeof nextAuthSignOut>
  ) => ReturnType<typeof nextAuthSignOut>;
}

export type AuthOption = {
  signInCallbackURL: string;
  signOutCallbackURL: string;
};

export const generateAuthRepository: RepositoryGenerator<
  Context,
  AuthOption,
  AuthRepository
> = (context, { signInCallbackURL, signOutCallbackURL }) => {
  const signInByAuth0: AuthRepository["signInByAuth0"] = async (
    router,
    options,
    authenticationParams
  ) => {
    if (!context.publicConfig.isEnableAuth) {
      // redirect が false の場合は、どこにもリダイレクトしない
      if (options?.redirect) {
        return;
      }
      const ok = await router.push(signInCallbackURL);
      const response: NextAuthSignInResponse = ok
        ? {
            ok,
            status: 200,
            error: undefined,
            url: signInCallbackURL,
          }
        : {
            ok,
            status: 400,
            error: "Failed to redirect to sign in page",
            url: signInCallbackURL,
          };
      return response;
    }
    const response = await nextAuthSignIn(
      "auth0",
      {
        callbackUrl: signInCallbackURL,
        ...options,
      },
      authenticationParams
    );
    return response;
  };

  const signOut: AuthRepository["signOut"] = async (router, options) => {
    if (!context.publicConfig.isEnableAuth) {
      // redirect が false の場合は、どこにもリダイレクトしない
      if (options?.redirect) {
        return;
      }
      await router.push(signOutCallbackURL);
      const response: NextAuthSignOutResponse = {
        url: options?.callbackUrl ?? signOutCallbackURL,
      };
      return response;
    }
    return nextAuthSignOut({
      callbackUrl: signOutCallbackURL,
      ...options,
    });
  };

  return applyLoggerToMethods(
    {
      signInByAuth0,
      signOut,
    },
    {
      shouldConsole: context.publicConfig.isDebug,
    }
  );
};
