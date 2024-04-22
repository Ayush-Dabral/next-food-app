import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import { loginSchema } from "./schemas"
import { getUserByEmail } from "./lib/data"
import bcrypt from "bcryptjs";
 
export default { providers: [
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
] } satisfies NextAuthConfig