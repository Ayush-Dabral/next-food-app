import * as z from "zod";

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
}).refine((data) => {
  if(data.password && !data.newPassword) {
    return false;
  }
  
  return true;
}, {
  message: "New password is required!",
  path: ["newPassword"]
}).refine((data) => {
  if(!data.password && data.newPassword) {
    return false;
  }
  return true;
}, {
  message: "Password is required!",
  path: ["password"]
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const resetSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
});

export const newPasswordSchema = z
  .object({
    password: z.string().min(1, {
      message: "Password is required",
    }),
    confirmedpassword: z.string().min(1, {
      message: "Password is required",
    }),
  })
  .refine((values) => values.password !== values.confirmedpassword, {
    message: "Password does not match!",
  });
