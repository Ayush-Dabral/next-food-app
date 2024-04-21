"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?:boolean;
};

const LoginButton = ({
    children,
    mode = "redirect",
    asChild
} : LoginButtonProps) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push("/login")
    }

    if(mode === "modal") {
        <span>Todo:Implement modal</span>
    }

    return ( 
        <span onClick={clickHandler} className="cursor-pointer">{children}</span>
     );
}
 
export default LoginButton;