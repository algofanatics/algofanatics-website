import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
//   const allowedPaths = [
//     "/",
//     "/forgotpassword",
//     "/forgotpassword/otp",
//     "/success",
//   ];

  const requestedPath = request.nextUrl.pathname;
  const isLoggedIn = request.cookies.get("userEmail");

  if (requestedPath === "/admin" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: "/admin",
};
