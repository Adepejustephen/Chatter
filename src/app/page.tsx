import { Button, Card, CardCaption, CardTitle, Container } from "@/components";
import HomeHeader from "@/layout/HomeHeader";
// import { Container } from "postcss";
import Image from "next/image";
import AboutImage from "/public/images/aboutImage.png"

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
        <section className="w-full py-[6rem]">
          <Container className="flex flex-col items-center gap-20 lg:flex-row lg:justify-between lg:items-start lg:gap-20 w-full">
            <div className="flex flex-col gap-8 flex-1">
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

        <section className="w-full sm:max-w-xs md:max-w-lg lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center gap-10">
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
          <div className="flex gap-10 mb-10 text-dark-200">
            <Card>
              <CardTitle>Analytics</CardTitle>
              <CardCaption>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </CardCaption>
            </Card>
            <Card>
              <CardTitle>Analytics</CardTitle>
              <CardCaption>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </CardCaption>
            </Card>
            <Card>
              <CardTitle>Analytics</CardTitle>
              <CardCaption>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </CardCaption>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
