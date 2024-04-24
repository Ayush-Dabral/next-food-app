"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonhref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonhref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="w-full mx-4 flex flex-col xs:mx-0 xs:w-[350px] shadow-md">
            <CardHeader className="text-center">
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton href={backButtonhref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}