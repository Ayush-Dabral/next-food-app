"use server"

import { getUserByEmail } from "@/lib/data";
import { db } from "@/lib/db"
import { getVerificationTokenByToken } from "@/lib/verificationToken"

export const newVerification = async (token: string | null) => {

    if(!token) {
        return { error: "Missing Token" }
    }

    const existingToken = await getVerificationTokenByToken(token);
    if(!existingToken) {
        return { error: "Token does not exist!" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired) {
        return { error: "Token has expired!" };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if(!existingUser) {
        return { error: "Email does not exist!" };
    }

    await db.user.update({
        where: {id:existingUser.id},
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: {id:existingToken.id}
    });
    return {success:"Email verified!"};
}