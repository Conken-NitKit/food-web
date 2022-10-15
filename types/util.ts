export type OmitFirstParameters<F> = F extends (
  x: any,
  ...args: infer P
) => infer R
  ? P
  : never;
