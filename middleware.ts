import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname;
  const isLoggedInCookie = request.cookies.get("details");
  const isLoggedIn = isLoggedInCookie ? JSON.parse(isLoggedInCookie.value) : null;

  if (requestedPath === "/admin" && !isLoggedIn?.token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: "/admin",
};

