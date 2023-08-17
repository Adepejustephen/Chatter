// "use client";
import { Button, Container } from "@/components";
import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <header className=" hidden lg:flex my-4 w-full ">
      <Container className="flex items-center justify-between  ">
        <div>
          <Link href="/">
            <h1 className="text-primary font-bold text-[2rem]">CHATTER</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/home" className="text-base font-bold text-secondary">
            Home
          </Link>
          <Link href="/about-us" className="text-base font-bold text-secondary">
            About us
          </Link>
          <Link
            href="/contact-us"
            className="text-base font-bold text-secondary"
          >
            Contact us
          </Link>
          <Link href="/blogs" className="text-base font-bold text-secondary">
            Blogs
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="outlined">
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <Link href="/register">Sign up</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default HomeHeader;
