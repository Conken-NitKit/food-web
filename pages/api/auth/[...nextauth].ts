import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

if (!process.env.AUTH0_CLIENT_ID) {
  throw new Error(
    "AUTH0_CLIENT_ID が定義されていません。.envファイル を確認してください。"
  );
}

if (!process.env.AUTH0_CLIENT_SECRET) {
  throw new Error(
    "AUTH0_CLIENT_SECRET が定義されていません。.envファイル を確認してください。"
  );
}

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
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
