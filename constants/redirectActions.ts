export const redirectActions = {
  NO_REDIRECT: "noRedirect",
  REDIRECT_TO_SIGN_IN: "redirectToSignIn",
  REDIRECT_TO_TOP: "redirectToTop",
  NOT_FOUND: "notFound",
} as const;

export type RedirectAction =
  typeof redirectActions[keyof typeof redirectActions];
