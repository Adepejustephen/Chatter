"use client"
import { Button, Card, CardCaption, CardIcon, CardTitle, Container } from "@/components";
import HomeHeader from "@/components/layout/HomeHeader";

import Image from "next/image";
import AboutImage from "/public/images/aboutImage.png"
import AnalyticsIcon from "/public/svgs/analytics.svg"
import InteractionIcon from "/public/svgs/interaction.svg"
import ContentIcon from "/public/svgs/content.svg"
import HomeFooter from "@/components/layout/HomeFooter";

const whyData = [
  {
    icon: <AnalyticsIcon/>,
    title: "Analytics",
    txt: "Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time",
  },
  {
    icon: <InteractionIcon/>,
    title: "Social interactions",
    txt: "Users on the platform can interact with posts they like, comment and engage in discussions",
  },
  {
    icon:< ContentIcon/>,
    title: "Content creation",
    txt: "Write nice and appealing with our in-built markdown, a rich text editor",
  },
];

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col w-full">
        <div className="flex flex-col items-center justify-center max-w-8xl w-full mx-auto relative min-h-[90vh] xxl:min-h-[50vh]  bg-[url('/images/hero.png')] bg-no-repeat bg-cover bg-center">
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
        <section className="w-full py-[6rem]">
          <Container className="flex flex-col items-center gap-20 lg:flex-row lg:justify-between lg:items-start lg:gap-20 w-full">
            <div className="flex flex-col gap-8 flex-1 items-center">
              <h4 className="text-3xl font-bold md:text-4xl lg:text-5xl ">
                About Chatter
              </h4>
              <p className="text-sm md:text-base lg:text-lg">
                Chatter is a multi-functional platform where authors and readers
                can have access to their own content. It aims to be a
                traditional bookworm&apos; heaven and a blog to get access to
                more text based content. Our vision is to foster an inclusive
                and vibrant community where diversity is celebrated. We
                encourage open-mindedness and respect for all individuals,
                regardless of their backgrounds or beliefs. By promoting
                dialogue and understanding, we strive
              </p>
            </div>
            <div className="block w-full max-w-[31.25rem] h-[15rem] md:h-[25rem] relative">
              <Image
                alt="about-image"
                src={AboutImage}
                fill={true}
                className="object-cover  w-full"
              />
            </div>
          </Container>
        </section>

        <section className="w-full max-w-[15rem] sm:max-w-xs md:max-w-lg lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center gap-10">
          <div className="flex items-center flex-col gap-5">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl ">
              Why you should join chatter
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </p>
          </div>
          <div className="grid  lg:grid-cols-3 gap-10 lg:gap-12 mb-10 text-dark-200">
            {whyData.map((item, idx) => {
              return (
                <Card key={idx} className="px-[1.125rem]">
                  <CardIcon className="mb-5">
{item.icon}
                  </CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardCaption>{item.txt}</CardCaption>
                </Card>
              );
            })}
          </div>
        </section>
        <section className="bg-shadeOrange py-20 w-full ">
          <Container className="flex flex-col md:flex-row gap-8 lg:gap-14">
            <div className="relative  rounded-[100%] w-full max-w-[17.5rem] h-[17.5rem] lg:max-w-xs lg:h-[20rem]">
              <Image
                src="/images/testimonial.png"
                alt="potrait"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col flex-1 lg:flex-0">
              <p className="text-sm md:text-bae lg:text-lg mb-8 lg:mb-12">
                &ldquo;Chatter has become an integral part of my online
                experience. As a user of this incredible blogging platform, I
                have discovered a vibrant community of individuals who are
                passionate about sharing their ideas and engaging in thoughtful
                discussions.”
              </p>
              <p className="text-sm md:text-bae lg:text-lg mb-8">
                <span className="font-medium text-base  lg:text-2xl">
                  Adebobola Muhydeen,
                </span>
                Software developer at Apple
              </p>
              <Button className="max-w-[max-content]">Join chatter</Button>
            </div>
          </Container>
        </section>
        <section className="py-14 md:py-20 w-full">
          <Container className="flex items-center flex-col md:flex-row md:items-start gap-8 md:gap-16 lg:gap-20 xl:gap-[7rem]">
            <div className="w-full lg:max-w-[352px] max-h-[412px] justify-start items-center gap-4 lg:gap-11 inline-flex ">
              <div className="flex-col justify-start items-start gap-12 lg:gap-16 inline-flex">
                <div className="w-[6.25rem] h-[6.25rem] md:w-[154px] md:h-[158px] relative rounded-full">
                  <Image
                    src="/images/home-grid-1.png"
                    alt="image-grid-1"
                    fill
                    className="w-full object-cover rounded-full"
                  />
                </div>
                <div className="w-[6.25rem] h-[6.25rem] md:w-[154px] md:h-[158px] relative rounded-full">
                  <Image
                    src="/images/home-grid-3.png"
                    alt="image-grid-2"
                    fill
                    className="w-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="w-[6.25rem] h-[6.25rem] md:w-[154px] md:h-[158px] relative rounded-full">
                <Image
                  src="/images/home-grid-2.png"
                  alt="image-grid-3"
                  fill
                  className="w-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 xl:gap-8">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl ">
                Write, read and connect with great minds on chatter
              </h2>
              <p className="text-sm md:text-base lg:text-lg ">
                Share people your great ideas, and also read write-ups based on
                your interests. connect with people of same interests and goals
              </p>
              <Button className="max-w-[max-content]">Get started</Button>
            </div>
          </Container>
        </section>
      </main>
      <HomeFooter/>
    </>
  );
}
