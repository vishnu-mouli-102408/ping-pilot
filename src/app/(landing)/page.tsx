import {
  BorderBeam,
  Container,
  GradientBorderButton,
  GridBeam,
  MaxWidthWrapper,
  Spotlight,
} from "@/components"
import Heading from "@/components/Global/heading"
import { Check } from "lucide-react"
import Image from "next/image"

import AnimationUI from "@/components/AnimationUI"
import { RightIcon } from "../../../public"

export default function Home() {
  return (
    <div className="relative overflow-clip">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {/* <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <GridBeam>
        <section className="relative py-24 sm:py-32">
          {/* <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          /> */}
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <MaxWidthWrapper className="text-center">
            <Container>
              <div className="relative mx-auto text-center flex flex-col items-center gap-10">
                <div>
                  <Heading className="text-brand-50">
                    <span className="leading-normal">
                      Real-Time SaaS Insights
                    </span>
                    <br />
                    <span className="relative bg-gradient-to-r from-brand-300 to-brand-600 text-transparent bg-clip-text">
                      Tailored For Your Online Interactions
                    </span>
                  </Heading>
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
    </div>
  )
}
