// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { parse } from "cookie";

export function middleware(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie");
  const cookies = cookieHeader ? parse(cookieHeader) : {};
  const token = cookies.access_token;

  if (!token) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static).*)"],
};
