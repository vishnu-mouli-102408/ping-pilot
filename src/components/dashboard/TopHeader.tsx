"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { FaArrowLeft } from "react-icons/fa6"
import { Button } from "../ui/button"

interface TopHeaderProps {
  title: string
  children?: React.ReactNode
  hideBackButton?: boolean
  cta?: React.ReactNode
}

const TopHeader = ({
  title,
  children,
  cta,
  hideBackButton,
}: TopHeaderProps) => {
  const router = useRouter()
  return (
    <section className="w-full text-white h-full flex flex-col flex-1">
      <div className="p-6 sm:p-8 flex justify-between border-b border-gray-900">
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-center gap-8">
            {hideBackButton ? null : (
              <Button
                onClick={() => router.push("/dashboard")}
                variant={"outline"}
                className="w-fit border-gray-800 hover:bg-white  hover:text-gray-300 transition-all duration-700 bg-custom-gradient"
              >
                <FaArrowLeft className="size-4" />
              </Button>
            )}

            <h1 className="text-gray-300 text-pretty font-heading font-semibold tracking-tight text-4xl">
              {title}
            </h1>
          </div>

          {cta ? <div>{cta}</div> : null}
        </div>
      </div>
      <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  )
}

export default TopHeader
