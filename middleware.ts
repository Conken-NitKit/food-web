import { composeMiddleware } from "next-compose-middleware";
import { NextRequest, NextResponse } from "next/server";
import { redirectActions } from "./constants/redirectActions";
import { generateNextAuthMiddleware } from "./middleware/nextAuthMiddleware";

const nextAuthMiddleware = generateNextAuthMiddleware({
  isDebug: process.env.NEXT_PUBLIC_IS_DEBUG === "true",
  shouldAuth: process.env.NEXT_PUBLIC_NO_AUTH !== "true",
  secret: process.env.SECRET,
  whenUnAuthn: redirectActions.REDIRECT_TO_TOP,
  appPageURL: "http://localhost:3000/",
});

export const middleware = async (req: NextRequest) => {
  return composeMiddleware(req, NextResponse.next(), {
    scripts: [],
    "/owner": {
      scripts: [nextAuthMiddleware],
    },
  });
};
