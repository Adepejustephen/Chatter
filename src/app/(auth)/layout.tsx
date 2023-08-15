"use client"
import "../globals.css";
import { DM_Sans } from "next/font/google";
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
    <html lang="en">
      <body
        className={`${dm_Sans.variable} font-dmSans  w-full  text-secondary `}
      >
        <main className={`  w-full  flex h-full  max-w-screen-xxl mx-auto `}>
          <div className="relative min-h-screen">
            <div className="sticky top-0 left-0">
              <div className=" hidden lg:flex flex-col  items-center justify-center relative max-w-[34.375rem] w-full h-screen   bg-[url('/images/auth-bg.png')]  bg-no-repeat bg-center bg-cover">
                <div className="bg-black w-full h-full absolute top-0 opacity-50"></div>
                <div className="flex flex-col gap-6 items-center z-10 text-white px-9">
                  <h1 className="font-bold text-4xl">CHATTER</h1>
                  <p className="text-2xl font-medium">
                    Unleash the Power of Words, Connect with Like-minded Readers
                    and Writers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 max-w-lg w-full my-10 mx-auto px-8 xl:px-0">
            <div className="grid grid-cols-2 w-full items-center">
              <Link
                href={"/register"}
                className={`text-neutral-900  text-base font-bold leading-normal border-b-[6px] pb-3 ${
                  pathname === "/register"
                    ? "border-primary"
                    : "border-zinc-300"
                }`}
              >
                Register
              </Link>
              <Link
                href={"/login"}
                className={`text-neutral-900 text-base font-bold leading-normal border-b-[6px] text-center pb-3 ${
                  pathname === "/login" ? "border-primary" : "border-zinc-300"
                }`}
              >
                Login
              </Link>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
