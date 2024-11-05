import { SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6"
import { RocketIcon } from "../../../public"
import GradientTransitionButton from "../Buttons/gradient-transition-button.tsx"
import HoverShine from "../Buttons/hover-shine/hover-shine"
import Container from "../Global/container"
import MaxWidthWrapper from "../Global/wrapper"

type Props = {}

export default function Navbar({}: Props) {
  const user = false

  return (
    <header className="sticky inset-x-0 transition-all border-b border-gray-800 top-0 z-50 h-[70px] w-full bg-[#02010a] px-14 backdrop-blur-lg">
      <MaxWidthWrapper>
        <Container reverse>
          <div className="mx-auto flex h-full items-center justify-between">
            <Link className="flex items-center gap-2 z-40 font-bold" href="/">
              <Image src={RocketIcon} alt="Rocket Icon" className="size-10" />
              <p className="text-lg text-[#4cc9f0]">
                Ping<span className="text-[#e0aaff]">Pilot</span>
              </p>
            </Link>

            {user ? (
              <div className="flex gap-4">
                <SignOutButton>
                  <HoverShine text="Sign Out" className="py-2 h-12" />
                </SignOutButton>
                <GradientTransitionButton
                  RightIcon={<FaArrowRightLong />}
                  text="Dashboard"
                />
              </div>
            ) : (
              <div className="flex gap-6">
                <div className="flex gap-3">
                  <HoverShine text="Pricing" className="py-2 h-12 " />
                  <SignOutButton>
                    <HoverShine text="Sign In" className="py-2 h-12" />
                  </SignOutButton>
                </div>
                <div className="h-12 w-px bg-gray-600" />
                <GradientTransitionButton
                  RightIcon={<FaArrowRightLong />}
                  text="Sign Up"
                />
              </div>
            )}
          </div>
        </Container>
      </MaxWidthWrapper>
    </header>
  )
}
