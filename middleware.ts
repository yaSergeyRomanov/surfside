import { type NextRequest, NextResponse } from "next/server";

const locales = ["ru", "en", "fr"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.includes(".")
  ) {
    return;
  }

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  const response = NextResponse.next();

  if (pathLocale) {
    response.headers.set("x-locale", pathLocale);
  } else if (
    pathname === "/" ||
    !pathname.startsWith("/" + locales.join("|"))
  ) {
    response.headers.set("x-locale", "ru");
  }

  return response;
}

export const config = {
  matcher: "/((?!_next|api|favicon.ico).*)",
};
