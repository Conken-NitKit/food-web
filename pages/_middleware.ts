import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = new URL(req.url);

  // NOTE: 認証が不要なページはここでリターンする
  if (!url.pathname.startsWith("/p/")) {
    return NextResponse.next();
  }

  const session = await getToken({ req, secret: process.env.SECRET });
  if (!session) return NextResponse.redirect("/api/auth/signin");

  return NextResponse.next();
}
