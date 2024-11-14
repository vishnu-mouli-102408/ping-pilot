import {
  AnimatedBeamMultipleOutputDemo,
  BlurText,
  BorderBeam,
  CardDemo,
  Container,
  CTA,
  GradientBorderButton,
  GridBeam,
  Icons,
  MagicCard,
  MaxWidthWrapper,
  MovingBorderButton,
  Perks,
  Pricing,
  Ripple,
  Spotlight,
} from "@/components"
import { Check } from "lucide-react"
import Image from "next/image"

import AnimationUI from "@/components/AnimationUI"
import { RightIcon, RocketIcon } from "../../../public"

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <GridBeam>
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-custom-black-gradient"></div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <MaxWidthWrapper className="text-center">
            <Container>
              <div className="relative mx-auto text-center flex flex-col items-center gap-10">
                <div>
                  <BlurText
                    className="leading-normal text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-brand-50"
                    word="Real-Time SaaS Insights"
                  />
                  <br />
                  <BlurText
                    className="relative text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight  bg-gradient-to-r from-brand-300 to-brand-600 text-transparent bg-clip-text"
                    word="Tailored For Your Online Interactions"
                  />
                </div>
                <p className="text-lg/7 text-[#4cc9f0] max-w-prose text-center text-pretty">
                  Ping Pilot is the simplest way to monitor your SaaS. Receive
                  instant notifications for{" "}
                  <span className="font-semibold text-[#f72585]">
                    sales, new users, or any events
                  </span>{" "}
                  sent directly to your favorite social media platforms.
                </p>
                <ul className="space-y-2 text-base/7 text-[#4895ef] text-left flex flex-col items-start">
                  {[
                    "Instant alerts for key events across all platforms",
                    "One-time purchase for lifelong access",
                    "Monitor sales, new users, and any significant updates",
                  ]?.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-1.5 items-center text-left"
                    >
                      <Check className="size-5 shrink-0 text-[#3f37c9]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="w-full mb-10 max-w-80">
                  <GradientBorderButton
                    rightIcon={
                      <Image
                        className="w-6 h-6 mt-1 transition-transform duration-500 group-hover:translate-x-1"
                        src={RightIcon}
                        alt="Right Icon"
                      />
                    }
                    text="Get Started Free Today"
                  />
                </div>
              </div>
            </Container>
          </MaxWidthWrapper>
        </section>
      </GridBeam>

      <section className="relative  pb-4">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className="relative mx-auto -top-16 ">
          <MaxWidthWrapper className="relative">
            <Container delay={0.3}>
              <div className="-m-2 rounded-xl relative backdrop-blur-lg border-neutral-700 bg-neutral-800/50 border border-neutral-200/50  shadow-lg p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="absolute top-[0%] left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                <BorderBeam duration={12} delay={9} />
                <AnimationUI />
              </div>
            </Container>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="relative overflow-clip py-24 sm:py-32 text-white">
        <div className="absolute inset-0 -z-10 h-full border-none w-full items-center px-5 py-24 bg-custom-black-gradient"></div>
        <MaxWidthWrapper>
          <Container>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="bg-gradient-to-r from-brand-300 to-brand-600 text-transparent bg-clip-text text-2xl">
                Smart Monitoring, Instant Updates
              </div>
              <div className=" bg-gradient-to-r from-brand-300 to-[#b5179e] text-transparent bg-clip-text leading-tight font-semibold text-5xl text-center">
                Real-time insights and instant notifications for your SaaS.
              </div>
            </div>
          </Container>
          <div className="mt-28 w-full">
            <Container>
              <div className="mt-16 w-full">
                <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
                  <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
                      <MovingBorderButton
                        duration={9000}
                        borderRadius="0.75rem"
                        className="flex items-start"
                      >
                        <MagicCard
                          particles={true}
                          className="flex flex-col cursor-pointer bg-custom-card-bg text-white border-[1px] border-gray-700 items-start size-full "
                        >
                          <h1 className="px-10 pt-10 text-xl font-heading font-medium heading">
                            Centralized Event Notifications
                          </h1>
                          <p className="text-sm px-10 md:text-base mt-2 text-muted-foreground">
                            One solution for real-time notifications across key.
                            Send crucial updates to all your communication
                            channels in one go. platforms
                          </p>
                          <div className="bento-card flex items-center justify-center min-h-72">
                            <AnimatedBeamMultipleOutputDemo className="h-max w-full md:shadow-none" />
                          </div>
                        </MagicCard>
                      </MovingBorderButton>
                      <MovingBorderButton
                        duration={9000}
                        borderRadius="0.75rem"
                      >
                        <MagicCard
                          particles={true}
                          className="flex flex-col cursor-pointer  border-[1px] border-gray-700 text-white bg-custom-card-bg  items-start w-full "
                        >
                          <CardDemo />
                          {/* <div className="bento-card w-full flex-row gap-6">
                          <div className="flex flex-col">
                            <h4 className="text-xl font-heading font-medium heading ">
                              Instant Updates
                            </h4>
                            <p className="text-sm md:text-base mt-2 text-muted-foreground">
                              Get notified about Critical Events the moment they
                              happen no matter if you are at Home or on the go.
                            </p>
                          </div>
                        </div> */}
                        </MagicCard>
                      </MovingBorderButton>
                    </div>
                  </Container>
                  <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
                      <MovingBorderButton
                        duration={8000}
                        borderRadius="0.75rem"
                      >
                        <MagicCard
                          particles={true}
                          className="flex flex-col cursor-pointer p-10 text-white bg-custom-card-bg border-[1px] border-gray-700 items-start w-full row-span-1 "
                        >
                          <div className="bento-card w-full h-full flex-row gap-6">
                            <div className="flex flex-col mt-auto">
                              <h4 className="text-xl font-heading font-medium heading">
                                Track any Event
                              </h4>
                              <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                From new Users Signup to Successful Payments,
                                get notified about any event that matters to
                                you.
                              </p>
                            </div>
                            <Icons.networkIcon />
                          </div>
                        </MagicCard>
                      </MovingBorderButton>
                      <div className="grid grid-rows gap-5 lg:gap-5">
                        <MovingBorderButton
                          duration={8000}
                          borderRadius="0.75rem"
                        >
                          <MagicCard
                            particles={true}
                            className="flex flex-col cursor-pointer p-10 text-white bg-custom-card-bg border-[1px] border-gray-700 items-start w-full row-span- row-start-[0.5] h-32 "
                          >
                            <div className="bento-card w-full relative items-center justify-center">
                              <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <p className="text-base text-muted-foreground text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#BAB3FF_0%,rgba(186,179,255,0)_90.69%)]">
                                  Experience seamless real-time notifications
                                  sent directly to multiple platforms from one
                                  centralized hub. Stay connected and informed
                                  with instant updates across Discord, Telegram,
                                  WhatsApp, and email, ensuring your essential
                                  alerts reach you wherever you are.
                                </p>
                              </div>
                              <div className="w-full h-16 relative">
                                <Icons.centeral className="w-full h-full" />
                                <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                              </div>
                            </div>
                          </MagicCard>
                        </MovingBorderButton>
                        <MovingBorderButton
                          duration={9000}
                          borderRadius="0.75rem"
                        >
                          <MagicCard
                            particles={true}
                            className="flex flex-col  cursor-pointer text-white border-[1px] border-gray-700 bg-custom-card-bg items-start w-full row-start-2 !h-max "
                          >
                            <div className="bento-card w-full gap-6 relative">
                              <div className="w-full h-48 relative">
                                <div className="flex justify-center h-full items-center relative">
                                  <Image
                                    src={RocketIcon}
                                    alt="Rocket Icon"
                                    className="size-10 "
                                  />
                                </div>
                                <Ripple
                                  mainCircleSize={100}
                                  className="md:shadow-none p-0"
                                  numCircles={10}
                                  // mainCircleOpacity={0.2}
                                />
                              </div>
                              <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                          </MagicCard>
                        </MovingBorderButton>
                      </div>
                      <MovingBorderButton
                        duration={8000}
                        borderRadius="0.75rem"
                      >
                        <MagicCard
                          particles={true}
                          className="flex flex-col p-10 cursor-pointer text-white border-[1px] border-gray-700 bg-custom-card-bg items-start w-full row-span-1 "
                        >
                          <div className="bento-card w-full h-full flex-row gap-6">
                            {/* <Icons.integration className="h-[150px]" /> */}
                            <div className="flex flex-col mb-auto">
                              <h4 className="text-xl font-heading font-medium heading ">
                                Seamless integrations
                              </h4>
                              <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                Connect your favorite tools and platforms to
                                streamline your workflow and save time.
                              </p>
                            </div>
                            <div className="flex flex-col mt-6 mb-auto">
                              <h4 className="text-xl font-heading font-medium heading ">
                                Integrations Made Easy
                              </h4>
                              <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                Connect your favorite tools and platforms to
                                streamline your workflow and save time.
                              </p>
                            </div>
                            {/* <div className="w-full h-28 relative">
                              <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"></div>
                            </div> */}
                          </div>
                        </MagicCard>
                      </MovingBorderButton>
                    </div>
                  </Container>
                </div>
              </div>
            </Container>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative overflow-clip pb-24 sm:pb-32 text-white">
        <div className="absolute inset-0 -z-10 h-full border-none w-full items-center px-5 py-24 bg-custom-black-gradient"></div>
        <MaxWidthWrapper>
          <Container>
            <Perks />
          </Container>
        </MaxWidthWrapper>
      </section>
      <section
        // id="pricing"
        className="relative overflow-clip pb-24 sm:pb-32 text-white"
      >
        <div className="absolute inset-0 -z-10 h-full border-none w-full items-center px-5 py-24 bg-custom-black-gradient"></div>
        <MaxWidthWrapper>
          <Container>
            <Pricing />
          </Container>
        </MaxWidthWrapper>
      </section>
      <section className="relative overflow-clip pb-24 sm:pb-32 text-white">
        <div className="absolute inset-0 -z-10 h-full border-none w-full items-center px-5 py-24 bg-custom-black-gradient"></div>
        <MaxWidthWrapper>
          <Container>
            <CTA />
          </Container>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
