"use client";
import { Avatar } from "@/components/ui";
import React, { useState } from "react";
import AvatarImage from "public/images/home-grid-3.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navlinks, blogsTags } from "@/utils/constansts/menuData";
import { Button } from "@/components/ui";
import UserIcon from "/public/svgs/account.svg";
import NotificationIcon from "/public/svgs/notificationicon.svg";
import TrendsIcon from "/public/svgs/trends.svg";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className=" h-[66px]  w-full">
      <div className="flex items-center justify-between px-5  md:px-14 lg:px-20 xl:px-0 xl:max-w-[1200px] xxl:max-w-[1600px] w-full mx-auto h-full z-20">
        <Avatar
          src={AvatarImage}
          size={32}
          onClick={() => setOpenMenu(!openMenu)}
        />
        <div>
          <Link href="/">
            <h1 className="text-primary font-bold text-2xl">CHATTER</h1>
          </Link>
        </div>
      </div>
      {openMenu && (
        <>
          <div
            className="fixed min-h-screen w-full top-0 left-0 z-[100] bg-black opacity-10"
            onClick={() => setOpenMenu(false)}
          ></div>
          <motion.div
            transition={{
              ease: "linear",
             
            }}
            initial={{ x: -100 }}
            animate={{
              x: 0,
            }}
            className="z-[100]  shadow bg-white  fixed min-h-screen w-full max-w-[80%] top-0 left-0 "
          >
            <div className="flex flex-col px-5  gap-5 w-full py-3 border-r overflow-auto shadow h-screen scrollbar-width">
              <Link href="/" className="w-[max-content]">
                <div className="flex flex-col ">
                  <Avatar
                    src={AvatarImage}
                    size={42}
                    onClick={() => setOpenMenu(!openMenu)}
                  />
                  <p className="font-semibold text-base mt-2">
                    Ifeoluwa Adepeju
                  </p>
                  <p className="font-normal text-ash text-sm ">
                    @adepejuStephen
                  </p>
                </div>
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
                            pathname === item.link
                              ? "text-primary"
                              : "!text-ash"
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
                <p className="text-lg font-normal flex gap-2 items-center">
                  Trending Tags <TrendsIcon />
                </p>
                <ul className="flex flex-col gap-3 pl-3">
                  {blogsTags.slice(0, 5).map((item, id) => {
                    return (
                      <li
                        key={id}
                        className=" w-full text-ash text-base font-normal"
                      >
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
          </motion.div>
        </>
      )}
    </header>
  );
};

export default MobileNav;
