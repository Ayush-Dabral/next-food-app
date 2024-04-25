import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { loginSchema } from "./schemas"
import { getUserByEmail } from "./lib/data"
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
 
export default { providers: [
    Github({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
        authorize: async (credentials) => {
            const validatedFields = loginSchema.safeParse(credentials);
            if(validatedFields.success) {
                const {email, password} = validatedFields.data;

                const user = await getUserByEmail(email)
                if(!user || !user.password) {
                    return null;
                }

                const passwordsMatch = await bcrypt.compare(password, user.password)

                if(passwordsMatch) return user;
            }
            return null;
        }
    })
],
secret: process.env.AUTH_SECRET } satisfies NextAuthConfig