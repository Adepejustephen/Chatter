"use client"

import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"
import { useMediaQuery } from "@uidotdev/usehooks";

export const SideBar = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 600px)");
  return <>{isSmallDevice ? <MobileNav /> : <DesktopNav />}</>;
};
