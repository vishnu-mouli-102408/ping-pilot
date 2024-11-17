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
  return (
    <section className="w-full text-white h-full flex flex-col flex-1">
      <div className="p-6 sm:p-8 flex justify-between border-b border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-8">
          {hideBackButton ? null : (
            <Button
              variant={"outline"}
              className="w-fit border-gray-800 hover:bg-white  hover:text-gray-400 transition-all duration-700 bg-custom-gradient"
            >
              <FaArrowLeft className="size-4" />
            </Button>
          )}
          <h1 className="text-gray-300 text-pretty font-heading font-semibold tracking-tight text-4xl">
            {title}
          </h1>

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
