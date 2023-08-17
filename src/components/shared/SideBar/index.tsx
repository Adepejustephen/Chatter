import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navlinks, blogsTags } from "@/utils/constansts/menuData";
import { Button } from "@/components/ui";
import UserIcon from "/public/svgs/account.svg";
import NotificationIcon from "/public/svgs/notificationicon.svg";

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="flex flex-col   min-h-screen sticky left-0 top-0 max-w-[16.75rem] w-full ">
      <div className="flex flex-col gap-5 w-full pr-10 pl-14 py-3 border-r overflow-auto shadow h-screen scrollbar-hide">
        <Link href="/">
          <h1 className="text-primary font-mmedium text-[2rem]">CHATTER</h1>
        </Link>
        <div className="flex flex-col gap-5">
          <p className="text-lg font-normal">Overview</p>
          <ul className="flex flex-col gap-3 pl-3">
            {Navlinks.map((item, id) => {
              return (
                <li key={id} className=" w-full">
                  <Link
                    href={item.link}
                    className={`${
                      pathname === item.link ? "text-primary" : "!text-ash"
                    } text-base font-normal flex gap-3 items-center`}
                  >
                    {item.icon} {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg font-normal">Trending Tags</p>
          <ul className="flex flex-col gap-3 pl-3">
            {blogsTags.slice(0, 5).map((item, id) => {
              return (
                <li key={id} className=" w-full text-ash text-base font-normal">
                  {item}
                </li>
              );
            })}
            <Button
              variant="text"
              className="w-[max-content] px-0 !text-primary"
            >
              See all
            </Button>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg font-normal">Personal</p>
          <div className="flex flex-col gap-3 pl-3">
            <Link
              href={"/account"}
              className={`${
                pathname === "account" ? "text-primary" : "!text-ash"
              } text-base font-normal flex gap-3 items-center`}
            >
              <UserIcon /> Account
            </Link>
            <Link
              href={"/account"}
              className={`${
                pathname === "account" ? "text-primary" : "!text-ash"
              } text-base font-normal flex gap-3 items-center`}
            >
              <NotificationIcon /> Notification
            </Link>
          </div>
          <Button
            variant="text"
            className="w-[max-content] px-0 !text-danger"
          >
            Log out
          </Button>
        </div>
      </div>
    </aside>
  );
};
