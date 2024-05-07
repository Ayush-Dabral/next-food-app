"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "./auth/logout-button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const UserPagesButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" flex items-center">
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-red-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <Link href={`/settings`}>
          <DropdownMenuItem>
            <IoSettingsOutline className="h-4 w-4 mr-2" />
            Settings
          </DropdownMenuItem>
        </Link>
        <LogoutButton>
          <DropdownMenuItem>
            <IoMdExit className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
