import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { context } from "../../../lib/context";
import { Logger } from "../../../types/logger";

export abstract class Context {
  abstract logger: Logger;
  abstract secretConfig: {
    auth0: {
      clientId: string;
      clientSecret: string;
      issuer?: string;
    };
    nextAuth: {
      url?: string;
      secret?: string;
    };
  };
}

/**
 * @description
 * 認証関連のAPIを生成するファクトリ関数です
 */
const generateNextAuth = (context: Context) => {
  return NextAuth({
    providers: [
      Auth0Provider({
        clientId: context.secretConfig.auth0.clientId,
        clientSecret: context.secretConfig.auth0.clientSecret,
        issuer: context.secretConfig.auth0.issuer,
      }),
    ],
    secret: context.secretConfig.nextAuth.secret,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        console.log({ user, account, profile, email, credentials });
        return true;
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        console.log({ token, user, account, profile, isNewUser });
        if (account?.accessToken) {
          token.accessToken = account.accessToken;
        }
        return token;
      },
      async session({ session, user, token }) {
        console.log({ session, user, token });
        return session;
      },
    },
  });
};

export default generateNextAuth(context);
