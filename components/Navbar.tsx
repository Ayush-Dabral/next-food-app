import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="text-white w-full bg-red-600 h-[60px] md:h-[80px] flex items-center">
      <div className="w-11/12 mx-auto flex justify-between md:w-10/12">
        <Link href="/">
          <div className="bg-white text-logo text-2xl font-semibold w-10 h-10 rounded-full flex items-center justify-center md:w-14 md:h-14 md:text-3xl">
            e!
          </div>
        </Link>

        <div className="flex items-center justify-end ">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="ghost" size="sm" className="border-2">
              Create an account
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
