"use client"

import { useClerk, useUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { RocketIcon } from "../../../public"
import GradientTransitionButton from "../Buttons/gradient-transition-button.tsx"
import HoverShine from "../Buttons/hover-shine/hover-shine"
import Container from "../Global/container"
import MaxWidthWrapper from "../Global/wrapper"
import MobileNavbar from "./mobile-navbar"

export default function Navbar() {
  const [isSigningOut, setIsSigningOut] = useState(false)
  const { user, isSignedIn } = useUser()
  const router = useRouter()

  console.log("User:", user, isSignedIn)

  const { signOut } = useClerk()

  const handleLogout = async () => {
    setIsSigningOut(true)
    console.log("Logging out...")

    await signOut()?.then(() => {
      setIsSigningOut(false)
    })
    router.push("/")
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[70px] w-full border-b border-gray-800 bg-[#121212] px-6 md:px-14 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <Container reverse>
          <div className="max-w-7xl mx-auto flex h-full items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src={RocketIcon}
                alt="Rocket Icon"
                className="size-8 md:size-10"
              />
              <p className="text-lg text-[#4cc9f0]">
                Ping<span className="text-[#e0aaff]">Pilot</span>
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 items-center">
              {isSignedIn ? (
                <div className="flex gap-4">
                  <div onClick={handleLogout}>
                    <HoverShine
                      loading={isSigningOut}
                      text="Sign Out"
                      className="py-2 h-12"
                    />
                  </div>
                  <Link href="/dashboard">
                    <GradientTransitionButton
                      RightIcon={<FaArrowRightLong />}
                      text="Dashboard"
                    />
                  </Link>
                </div>
              ) : (
                <div className="flex gap-6">
                  <div className="flex gap-3">
                    <Link href="/#pricing">
                      <HoverShine text="Pricing" className="py-2 h-12" />
                    </Link>
                    <Link href="/sign-in">
                      <HoverShine text="Sign In" className="py-2 h-12" />
                    </Link>
                  </div>
                  <div className="h-12 w-px bg-gray-600" />
                  <Link href="/sign-up">
                    <GradientTransitionButton
                      RightIcon={<FaArrowRightLong />}
                      text="Sign Up"
                    />
                  </Link>
                </div>
              )}
            </nav>

            {/* Mobile Navbar */}
            <MobileNavbar
              handleLogout={handleLogout}
              isSigningOut={isSigningOut}
            />
          </div>
        </Container>
      </MaxWidthWrapper>
    </header>
  )
}
