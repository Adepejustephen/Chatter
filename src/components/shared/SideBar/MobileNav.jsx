"use client"
import { Avater } from '@/components/ui';
import React, { useState } from 'react'
import AvaterImage from "public/images/home-grid-3.png";
import Link from 'next/link';
import { motion } from "framer-motion";

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className=" h-[66px]">
      <div className="flex items-center justify-between px-5  md:px-14 lg:px-20 xl:px-0 xl:max-w-[1200px] xxl:max-w-[1600px] w-full mx-auto h-full z-10">
        <Avater
          src={AvaterImage}
          size={32}
          onClick={() => {setOpenMenu(!openMenu); console.log("hello")}}
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
            className="sticky min-h-screen w-full top-0 left-0 z-20 bg-black opacity-20"
            onClick={() => setOpenMenu(false)}
          ></div>
          <motion.div className="z-[999] bg-white shadow max-w-[max-content] sticky min-h-screen w-full top-0 left-0 ">aaa</motion.div>
        </>
      )}
    </header>
  );
}

export default MobileNav