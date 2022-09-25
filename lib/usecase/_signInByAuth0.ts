import { AuthRepository } from "../repository/_auth";
import { Usecase } from "./interface";

export abstract class Context {
  abstract repositories: {
    auth: AuthRepository;
  };
}

export const signInByAuth0 = (
  context: Readonly<Context>
): Usecase<
  Parameters<AuthRepository["signInByAuth0"]>,
  ReturnType<AuthRepository["signInByAuth0"]>
> => {
  const authRepository = context.repositories.auth;
  return async (...signInByAuth0Params) => {
    const result = await authRepository.signInByAuth0(...signInByAuth0Params);
    return result;
  };
};
