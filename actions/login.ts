"use server";

import * as z from "zod"

import { loginSchema } from "@/schemas";
import { error } from "console";

export const login = async (values: z.infer<typeof loginSchema>) => {
    const validatedField = loginSchema.safeParse(values);

    if(!validatedField.success) {
        return { error: "Invalid fields!" };
    }

    return { success: "Email sent!" };
}