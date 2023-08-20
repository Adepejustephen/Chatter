"use client"
import { SideBar, TopBar } from "@/components";
import "../globals.css";
import { DM_Sans } from "next/font/google";

const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Chatter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm_Sans.variable} font-dmSans text-secondary `}>
        <div className="relaive h-screen flex flex-col gap-5 lg:gap-0 lg:flex-row xxl:max-w-[1600px] mx-auto">
          <SideBar />
          <div className="flex flex-col gap-6 w-full">
            <TopBar />
            <main className="border shadow w-full ml-6 mr-auto rounded-sm max-w-5xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
