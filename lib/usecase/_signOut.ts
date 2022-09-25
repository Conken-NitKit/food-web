import { Context } from "../context";
import { AuthRepository } from "../repository/_auth";
import { Usecase } from "./interface";

export const signOut = (
  context: Readonly<Context>
): Usecase<
  Parameters<AuthRepository["signOut"]>,
  ReturnType<AuthRepository["signOut"]>
> => {
  const authRepository = context.repositories.auth;
  return async (...signOutParams) => {
    const result = await authRepository.signOut(...signOutParams);
    return result;
  };
};
