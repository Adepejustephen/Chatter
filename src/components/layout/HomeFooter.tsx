
import { Container } from "@/components";
import Link from "next/link";
import React from "react";

function HomeFooter() {
  return (
    <footer className="w-full bg-shadeOrange py-14">
      <Container className="flex gap-8 md:gap-28 lg:gap-32 xl:gap-40">
        <div>
          <Link href="/">
            <h1 className="text-primary text-2xl md:text-3xl font-bold lg:text-5xl">
              Chatter
            </h1>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between w-full gap-5 md:gap-10 flex-1">
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="font-medium text-base md:text-lg lg:text-2xl">
              Explore
            </h4>
            <div className="flex flex-col gap-3 md:gap-4">
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Community
              </Link>
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Trending blogs
              </Link>
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Chatter for teams
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="font-medium text-base md:text-lg lg:text-2xl">
              Support
            </h4>
            <div className="flex flex-col gap-3 md:gap-4">
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Support docs
              </Link>
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Join slack
              </Link>
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <h4 className="font-medium text-base md:text-lg lg:text-2xl">
              Official blog
            </h4>
            <div className="flex flex-col gap-3 md:gap-4">
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Official blog
              </Link>
              <Link href="/" className="text-sm md:text-base lg:text-lg">
                Engineering blog
              </Link>
             
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default HomeFooter;
