"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();
  console.log(user)

  const onClick = () => {
    logout();
  };

  return (
    <div className=" w-9/12 mx-auto flex flex-col bg-white p-10 rounded-xl">
      <Button onClick={onClick}>log out</Button>
    </div>
  );
};

export default SettingsPage;
