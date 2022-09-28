import { Context } from "../context";
import { AuthRepository, generateAuthRepository } from "./_auth";

export type { AuthRepository };

/**
 * @description
 * Context に追加する Repository を生成するファクトリ関数です
 */
export const builder = (context: Readonly<Context>) => {
  return {
    auth: generateAuthRepository(context, {
      signInCallbackURL: "/owner/xxx/",
      signOutCallbackURL: "/",
    }),
  } as const;
};
