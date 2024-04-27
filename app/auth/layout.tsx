import { SettingsNavbar } from "@/app/(protected)/_components/settings-navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-400 to-red-800">
      <SettingsNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;
