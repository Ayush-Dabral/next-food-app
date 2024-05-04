import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes, authRoutes } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isDynamicPublicRoute = publicRoutes.some(route => {
    if (typeof route === "string") {
      return route === nextUrl.pathname;
    } else if (route instanceof RegExp) {
      return route.test(nextUrl.pathname);
    }
    return false;
  });

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if(isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isDynamicPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if(nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(new URL(
      `/auth/login?callbackUrl=${encodedCallbackUrl}`,
      nextUrl
    ));
  }

  return;
});

 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}