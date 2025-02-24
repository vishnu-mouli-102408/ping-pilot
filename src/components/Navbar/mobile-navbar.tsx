"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useUser } from "@clerk/nextjs"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import GradientTransitionButton from "../Buttons/gradient-transition-button.tsx"
import HoverShine from "../Buttons/hover-shine/hover-shine"

interface MobileNavbarProps {
  handleLogout: () => Promise<void>
  isSigningOut: boolean
}

const MobileNavbar = ({ handleLogout, isSigningOut }: MobileNavbarProps) => {
  const { user, isSignedIn } = useUser()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex  lg:hidden items-center justify-end">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="tertiary"
            className="text-neutral-50  rounded-full"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-screen">
          <SheetClose
            asChild
            className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center"
          >
            <Button size="icon" variant="ghost" className="text-neutral-600">
              <X className="w-5 h-5" />
            </Button>
          </SheetClose>
          <div className="flex flex-col items-start w-full py-2 mt-10">
            <div
              //   onClick={handleClose}
              className="flex items-center justify-evenly w-full space-x-2"
            >
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
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <Link href="/#pricing">
                      <HoverShine text="Pricing" className="py-2 h-12" />
                    </Link>
                    <Link href="/sign-in">
                      <HoverShine text="Sign In" className="py-2 h-12" />
                    </Link>
                  </div>

                  <Link className="w-full flex justify-center" href="/sign-up">
                    <GradientTransitionButton
                      RightIcon={<FaArrowRightLong />}
                      text="Sign Up"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavbar
