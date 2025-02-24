"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useIsMobile } from "@/hooks/use-mobile"

import { useEffect, useState } from "react"

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  function setWithExpiry() {
    const now = new Date()

    const item = {
      value: "true",
      expiry: now.getTime() + 3600000,
    }
    localStorage.setItem("popup", JSON.stringify(item))
  }

  function getWithExpiry() {
    const itemStr = localStorage.getItem("popup")

    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()

    if (now.getTime() > item.expiry) {
      localStorage.removeItem("popup")
      return null
    }
    return item.value
  }

  useEffect(() => {
    setTimeout(() => {
      if (isMobile && !getWithExpiry()) {
        setWithExpiry()
        setIsOpen(true)
      } else {
        return
      }
    }, 3000)
  }, [isMobile])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen((prev) => !prev)
      }}
    >
      <DialogContent className="bg-gray-800 border-none rounded-lg shadow-xl p-5 px-8 flex flex-col items-center text-center max-w-xs">
        <div className="text-xl mt-2 text-white font-semibold">
          <h2>Desktop Version Recommended</h2>
        </div>
        <p className="text-base text-gray-100">
          For the best experience, please use our desktop version. Some features
          may not be available on mobile. This app is designed for desktop use.
        </p>
      </DialogContent>
    </Dialog>
  )
}
