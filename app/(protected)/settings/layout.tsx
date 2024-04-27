import { SettingsNavbar } from "../_components/settings-navbar";

const SettingsLayout = ({children}:{children: React.ReactNode}) => {
    return ( 
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-400 to-red-800">
            <SettingsNavbar />
            {children}
        </div>
     );
}
 
export default SettingsLayout;