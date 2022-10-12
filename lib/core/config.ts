export const publicConfig = {
  isEnableAuth: process.env.NEXT_PUBLIC_NO_AUTH !== "true",
  isDebug: process.env.NEXT_PUBLIC_IS_DEBUG === "true",
} as const;

if (publicConfig.isDebug) {
  console.log("publicConfig", publicConfig);
}

export type PublicConfig = typeof publicConfig;
