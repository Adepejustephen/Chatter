import { Avatar, Input } from "@/components/ui";
import React from "react";
import NotificationIcon from "/public/svgs/notificationicon.svg";
import SearchIcon from "/public/svgs/search.svg";
import AvatarImage from "public/images/home-grid-3.png";

export const TopBar = () => {
  return (
    <div className="border-y w-full rounded-sm shadow ">
      <div className="w-full max-w-5xl py-2 mx-auto flex gap-36 lg:gap-40 justify-end items-center">
              <div className="flex max-w-lg  w-full">
                  
        <Input prefix={<SearchIcon/>} placeholder="Search chatter" className="text-xs w-full py-2" />
              </div>
        <div className="flex gap-4 items-center">
          <NotificationIcon />
          <Avatar
            src={AvatarImage}
            size={32}
            //   onClick={() => setOpenMenu(!openMenu)}
            />
              </div>
      </div>
    </div>
  );
};
