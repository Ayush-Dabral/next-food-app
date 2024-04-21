"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/index";

import { CardWrapper } from "./card-wrapper";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useState, useTransition } from "react";
import { login } from "@/actions/login";

var eye = false;

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [sucesss, setSucesss] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleClick() {
    eye = !eye;
  }

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setSucesss("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSucesss(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonhref="/signin"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@example.com"
                      type="email"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="flex items-center border-[1px] rounded-md focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
                      <Input
                        placeholder="••••••"
                        type={eye ? "text" : "password"}
                        className="border-0 focus-visible:ring-0 focus-visible:shadow-none focus-visible:ring-offset-0"
                        {...field}
                        disabled={isPending}
                      />
                      <button
                        onClick={handleClick}
                        className="rounded-full h-7 w-7"
                      >
                        {eye && <FaEye className="text-black" />}
                        {!eye && <FaEyeSlash />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={sucesss} />
            <Button type="submit" className="w-full" disabled={isPending}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
