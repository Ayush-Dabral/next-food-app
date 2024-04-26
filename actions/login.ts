"use server";

import * as z from "zod";

import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/lib/data";
import { generateTwoFactorToken, generateVerificationToken } from "@/lib/tokens";
import { sendTwoFactorEmail, sendVerificationEmail } from "@/lib/mail";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = generateVerificationToken(existingUser.email);
    await sendVerificationEmail(
      (await verificationToken).email,
      (await verificationToken).token
    );
    return { success: "Confirmation email sent!" };
  }

  if(existingUser.isTwoFactorEnabled) {
    const twoFactorToken = await generateTwoFactorToken(existingUser.email)
    await sendTwoFactorEmail(
      twoFactorToken.email,
      twoFactorToken.token
    );
    if(code)

    return { twoFactor: true };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    // return { success: "User logged in!" }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};

// callbackUrl ||
