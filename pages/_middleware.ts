import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PAGE_PATHS = ["/", "/signin"];

export async function middleware(req: NextRequest) {
  const url = new URL(req.url);

  // NOTE: 認証が不要なページはここでリターンする
  if (
    process.env.NO_AUTH === "true" ||
    PUBLIC_PAGE_PATHS.includes(url.pathname) ||
    url.pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const session = await getToken({ req, secret: process.env.SECRET });
  console.log(session);
  if (!session) return NextResponse.redirect(url.origin + "/api/auth/signin");

  return NextResponse.next();
}
