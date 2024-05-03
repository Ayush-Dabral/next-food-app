"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {

  const onServerActionClick = () => {
    admin().then((data) => {
      if(data.error) {
        toast.error(data.error)
      }
      else {
        toast.success(data.success)
      }
    })
  }

  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("Allowed API Route!")

      } else {
        toast.error("Forbidden API Route!")
      }
    });
  };
  return (
    <Card className=" w-[600px]">
      <CardHeader>
        <CardTitle>🔑Admin</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <p>Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <p>Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
