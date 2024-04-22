import Link from "next/link";
import { Logo } from "../logo";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Link href="/">
        <div className=" w-20 h-20 flex items-center justify-center rounded-full border-[1px] border-[#707070] bg-white text-4xl font-semibold text-logo">
          e!
        </div>
      </Link>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
