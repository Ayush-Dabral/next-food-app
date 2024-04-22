"use client";

import { useRouter } from "next/navigation";

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
        router.push("/signup")
    }

    if(mode === "modal") {
        <span>Todo:Implement modal</span>
    }

    return ( 
        <span onClick={clickHandler} className="cursor-pointer">{children}</span>
     );
}
 
export default RegisterButton;