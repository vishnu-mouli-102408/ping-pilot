import { Container, GradientBorderButton, MaxWidthWrapper } from "@/components"
import Heading from "@/components/Global/heading"
import { Check } from "lucide-react"
import Image from "next/image"
import { RightIcon } from "../../../public"

export default async function Home() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <MaxWidthWrapper className="text-center">
        <Container>
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading className="text-brand-50">
                <span className="leading-normal">Real-Time SaaS Insights</span>
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
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-[#3f37c9]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
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
  )
}
