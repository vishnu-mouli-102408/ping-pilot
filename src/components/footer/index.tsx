import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import Image from "next/image"
import Link from "next/link"
import { RocketIcon } from "../../../public"
import Container from "../Global/container"
import MaxWidthWrapper from "../Global/wrapper"

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-[#383333] pt-10 md:pt-16  md:pb-0 w-full px-auto mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-[#FAFAFA] rounded-full"></div>
      <div className="absolute inset-0 -z-10 h-full border-none w-full items-center px-5 py-24 bg-custom-black-gradient"></div>
      <MaxWidthWrapper>
        <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
          <Container delay={0.1}>
            <div className="flex flex-col items-start justify-start md:max-w-[200px]">
              <div className="flex items-start">
                <Image src={RocketIcon} alt="Rocket Icon" className="size-10" />
              </div>
              <p className="text-muted-foreground mt-4 text-sm text-start">
                Real Time SaaS Analytics
              </p>
              <span className="md:mt-4 mt-2 text-neutral-200 text-sm flex items-center">
                Made by{" "}
                <Link
                  href="https://bento.me/mouli-ganivada"
                  target="_blank"
                  className="font-semibold ml-1"
                >
                  Vishnu Mouli
                </Link>
              </span>
            </div>
          </Container>

          <div className="grid-cols-2 gap-8 grid md:mt-16 mt-4 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <Container className="h-[150px]" delay={0.2}>
                <div>
                  <h3 className="text-base font-medium text-white">Product</h3>
                  <ul className="mt-4 text-sm text-muted-foreground">
                    <li className="mt-2">
                      <Link
                        href=""
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Features
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href=""
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href=""
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href=""
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Integration
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container> */}
              <Container className="h-max" delay={0.3}>
                <div className="md:mt-0 flex flex-col">
                  <h3 className="text-base font-medium text-white">
                    Integrations
                  </h3>
                  <ul className="mt-4 text-sm text-muted-foreground">
                    <li className="">
                      <Link
                        href="https://github.com/vishnu-mouli-102408"
                        target="_blank"
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Github
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="https://bento.me/mouli-ganivada"
                        target="_blank"
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="https://x.com/iamVishnuMouli"
                        target="_blank"
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="https://www.linkedin.com/in/ganivada-mouli/"
                        target="_blank"
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        LinkedIn
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <Container className="h-[150px]" delay={0.4}>
                <div className="">
                  <h3 className="text-base font-medium text-white">
                    Resources
                  </h3>
                  <ul className="mt-4 text-sm text-muted-foreground">
                    <li className="mt-2">
                      <Link
                        href="/resources/blog"
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="/resources/help"
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container> */}
              <Container className="h-max" delay={0.5}>
                <div className="md:mt-0 flex flex-col">
                  <h3 className="text-base font-medium text-white">Contact</h3>
                  <ul className="mt-4 text-sm text-muted-foreground">
                    <li className="">
                      <Link
                        href=""
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href=""
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href="/"
                        className="hover:text-slate-300 transition-all duration-300"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container>
            </div>
          </div>
        </div>

        <div className="md:mt-8 my-4 border-t border-border/40 md:pt-8 md:flex md:items-center md:justify-between w-full">
          <Container delay={0.6}>
            <p className="text-sm ml-2 md:ml-0 text-muted-foreground mt-8 md:mt-0">
              &copy; {new Date().getFullYear()} Ping Pilot INC. All rights
              reserved.
            </p>
          </Container>
        </div>

        <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
          <TextHoverEffect text="PINGPILOT" />
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
