"use server";

import * as z from "zod";
import { resetSchema } from "@/schemas";
import { getUserByEmail } from "@/lib/data";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof resetSchema>) => {

  const validatedFields = resetSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }
  const { email } = validatedFields.data;
  
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "User does not exist!" };
  }
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  

  return { success: "Reset email sent" };
};
