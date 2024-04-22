import authConfig from "./auth.config"
import NextAuth from "next-auth"
const { auth } = NextAuth(authConfig)
 
export default auth((req) => {
  // req.auth
  const isLoggedIn = !!req.auth;
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}