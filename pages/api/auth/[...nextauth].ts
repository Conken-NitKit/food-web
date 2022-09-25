import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { secretConfig } from "../../../lib/core/secretConfig";

/**
 * @description
 * 認証関連のAPIを生成するファクトリ関数です
 */
const generateNextAuth = (config: {
  auth0: {
    clientId: string;
    clientSecret: string;
    issuer?: string;
  };
  nextAuth: {
    secret?: string;
  };
}) => {
  return NextAuth({
    providers: [
      Auth0Provider({
        clientId: config.auth0.clientId,
        clientSecret: config.auth0.clientSecret,
        issuer: config.auth0.issuer,
      }),
    ],
    secret: config.nextAuth.secret,
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
    debug: true,
    logger: {
      error(code, metadata) {
        console.error(code, metadata);
      },
      warn(code) {
        console.warn(code);
      },
      debug(code, metadata) {
        console.debug(code, metadata);
      },
    },
  });
};

export default generateNextAuth({
  auth0: {
    clientId: secretConfig.auth0.clientId,
    clientSecret: secretConfig.auth0.clientSecret,
    issuer: secretConfig.auth0.issuer,
  },
  nextAuth: {
    secret: secretConfig.nextAuth.secret,
  },
});
