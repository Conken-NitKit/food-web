export type Usecase<Params extends any[], Result> = (
  ...params: Params
) => Result;
