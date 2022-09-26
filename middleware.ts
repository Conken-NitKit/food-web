import { composeMiddleware } from "next-compose-middleware";
import { NextRequest, NextResponse } from "next/server";
import { redirectActions } from "./constants/redirectActions";
import { context } from "./lib/context";
import { secretConfig } from "./lib/core/secretConfig";
import { generateAuthProtectMiddleware } from "./lib/middlewares/authProtectMiddleware";
import { generateUnAuthProtectMiddleware } from "./lib/middlewares/unAuthProtectMiddleware";

const authProtectMiddleware = generateAuthProtectMiddleware(context, {
  secret: secretConfig.nextAuth.secret,
  whenUnAuthn: redirectActions.REDIRECT_TO_TOP,
  appPageURL:
    context.publicConfig.isEnableAuth && secretConfig.nextAuth.url
      ? secretConfig.nextAuth.url
      : "http://localhost:3000/",
});

const unAuthProtectMiddleware = generateUnAuthProtectMiddleware(context, {
  secret: secretConfig.nextAuth.secret,
  whenAuthn: redirectActions.REDIRECT_TO_SIGN_IN,
  signInPageURL: `${
    context.publicConfig.isEnableAuth && secretConfig.nextAuth.url
      ? secretConfig.nextAuth.url
      : "http://localhost:3000/"
  }/owner/xxx/menu`,
});

export const middleware = async (req: NextRequest) => {
  return composeMiddleware(req, NextResponse.next(), {
    scripts: [],
    "/signin": [unAuthProtectMiddleware],
    "/owner": {
      scripts: [authProtectMiddleware],
    },
  });
};
