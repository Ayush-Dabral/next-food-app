
import { auth, signOut } from "@/auth";
import { useRouter } from "next/navigation";

const SettingsPage = async () => {

    const session = await auth();
    // const router = useRouter();

    return ( 
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server"
                // router.push("/")
                await signOut();
            }}>
                <button type="submit">Signout</button>
            </form>
        </div>
     );
}
 
export default SettingsPage;