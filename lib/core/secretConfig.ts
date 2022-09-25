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

export const secretConfig = {
  auth0: {
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    issuer: process.env.AUTH0_ISSUER,
  },
  nextAuth: {
    url: process.env.NEXTAUTH_URL,
    secret: process.env.NEXTAUTH_SECRET,
  },
} as const;

export type SecretConfig = typeof secretConfig;
