import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";

export default NextAuth({
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID || "",
      clientSecret: process.env.LINE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log({ url, baseUrl });
      return url.startsWith(baseUrl) ? url : baseUrl;
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
