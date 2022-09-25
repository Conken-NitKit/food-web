import { Context } from "../context";
import { generateAuthRepository } from "./_auth";

export const builder = (context: Readonly<Context>) => {
  return {
    auth: generateAuthRepository(context, {
      signInCallbackURL: "/owner/xxx/",
      signOutCallbackURL: "/",
    }),
  } as const;
};
