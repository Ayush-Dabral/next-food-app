import * as React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <div className="relative w-full">
        <input
          {...props}
          placeholder="••••••"
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={`flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0 focus-visible:shadow-none focus-visible:ring-offset-0 ${className}`}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <FaEye />
          ) : (
            <FaEyeSlash />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };

export { Input };
