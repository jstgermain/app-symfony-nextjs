// frontend/src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.headers.get("cookie") || "";

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const res = await fetch("http://localhost:8000/api/me", {
      headers: { cookie },
    });

    if (!res.ok) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
