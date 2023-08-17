"use client"
import { SideBar } from "@/components";
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
        <div className="relative h-screen flex flex-col lg:flex-row xxl:max-w-[1600px] mx-auto">
         
          <SideBar /> {children}
        </div>
      </body>
    </html>
  );
}