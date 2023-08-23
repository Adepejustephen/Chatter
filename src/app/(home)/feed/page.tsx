"use client";

import { Button } from "@/components";
import React from "react";
import PenIcon from "/public/svgs/pen.svg";
import Tabs from "@/components/ui/Tab";
import TabList from "@/components/ui/Tab/TabList";
import TabNav from "@/components/ui/Tab/TabNav";
import TabContent from "@/components/ui/Tab/TabContent";

const page = () => {
  return (
    <div className="flex max-w-3xl w-full mx-auto flex-col gap-10">
      <div className="flex w-full justify-between items-center gap-4 my-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-3xl">FEED</h2>
          <p className="text-lg text-ash">
            Explore different content you&apos;d love
          </p>
        </div>
        <Button className="flex gap-2 text-base items-center py-2">
          <PenIcon />
          Post a content
        </Button>
      </div>
      <Tabs defaultValue="tab1" variant="underline">
        <TabList className="md:rounded-lg md:border ">
          <TabNav value="tab1" className="!justify-sart py-3">
            For you
          </TabNav>

          <TabNav value="tab2" className="!justify-sart py-3">
            Featured
          </TabNav>
          <TabNav value="tab3" className="!justify-sart py-3">
            Recent
          </TabNav>
        </TabList>
        <section className="mb-5">
          <TabContent value="tab1">hello</TabContent>
          <TabContent value="tab2">hello</TabContent>
          <TabContent value="tab3">Are you there</TabContent>
        </section>
      </Tabs>
    </div>
  );
};

export default page;
