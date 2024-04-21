import Link from "next/link";

export const Logo = () => {
    return ( 
        <Link 
        href="/">
        <div className=" w-20 h-20 flex items-center justify-center rounded-full border-[1px] border-[#707070] bg-white text-4xl font-semibold text-logo md:w-36 md:h-36 md:text-6xl md:font-bold">
            e!
        </div>
        </Link>
    );
}