import { NextRequest, NextResponse } from "next/server";

const legacyRedirects: Record<string, string> = {
  "/共創": "/about",
  "/サービス": "/services",
  "/私たちについて": "/about",
  "/プライバシーポリシー": "/privacy",
  "/cookie-クッキー-ポリシー": "/privacy",
};

export function proxy(request: NextRequest) {
  const pathname = decodeURIComponent(request.nextUrl.pathname);
  const destination = legacyRedirects[pathname];

  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  url.search = "";

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/:path*"],
};
