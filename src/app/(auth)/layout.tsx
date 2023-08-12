"use client"
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  style: ["normal", "italic"],
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
  
  }) {
  const pathname = usePathname();
  return (
    <div
      className={`${dm_Sans.variable} font-dmSans text-secondary items-center flex min-h-screen max-w-screen-xxl mx-auto`}
    >
      <div className=" hidden lg:flex flex-col  items-center justify-center relative w-[40%] h-screen bg-[url('/images/auth-bg.png')] bg-no-repeat bg-center bg-cover">
        <div className="bg-black w-full h-full absolute top-0 opacity-50"></div>
      </div>
      <div className="flex flex-col gap-10 max-w-lg w-full pt-10 mx-auto">
        <div className="grid grid-cols-2 w-full items-center">
          <Link
            href={"/register"}
            className={`text-neutral-900  text-base font-bold leading-normal border-b-[6px] pb-3 ${
              pathname === "/register" ? "border-primary" : "border-zinc-300"
              }`}
            
          >
            Register
          </Link>
          <Link
            href={"/login"}
            className={`text-neutral-900 text-base font-bold leading-normal border-b-[6px] pb-3 ${
              pathname === "/login" ? "border-primary" : "border-zinc-300"
            }`}
          >
            Login
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
