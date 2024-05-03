"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { RegisterForm } from "./register-form";

interface RegisterButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?:boolean;
};

const RegisterButton = ({
    children,
    mode = "redirect",
    asChild
} : RegisterButtonProps) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push("/auth/signup")
    }

    if(mode === "modal") {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild}>
                    {children}
                </DialogTrigger>
                <DialogContent className="p-0 w-auto bg-transparent border-none">
                    <RegisterForm />
                </DialogContent>
            </Dialog>
        )
    }

    return ( 
        <span onClick={clickHandler} className="cursor-pointer">{children}</span>
     );
}
 
export default RegisterButton;