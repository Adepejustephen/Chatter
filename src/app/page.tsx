import { Button } from "@/components";
import HomeHeader from "@/layout/HomeHeader";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col w-full">
        <div className="flex flex-col items-center justify-center max-w-8xl w-full mx-auto relative min-h-[90vh] xxl:min-h-[70vh] realtive bg-[url('/images/hero.png')] bg-no-repeat bg-cover bg-center">
          <div className="bg-secondary w-full h-full absolute top-0 opacity-50"></div>
          <div className="text-white z-[2] flex  flex-col xs:max-w-[15rem] sm:max-w-xs md:max-w-lg lg:max-w-3xl xl:max-w-5xl gap-5">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Welcome to Chatter: A Haven for Text-Based Content
            </h2>
            <p className="font-medium  text-lg md:text-2xl">
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
            <Button className="max-w-[max-content]">Get started</Button>
          </div>
        </div>
      </main>
    </>
  );
}
