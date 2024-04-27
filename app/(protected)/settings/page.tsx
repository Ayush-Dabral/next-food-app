"use client";

import { logOut } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logOut();
  };

  return (
    <div className=" w-9/12 mx-auto flex flex-col bg-white p-10 rounded-xl">
      
    </div>
  );
};

export default SettingsPage;
