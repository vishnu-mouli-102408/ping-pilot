"use client"

import { Modal } from "@/components/modals/modal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { UserButton } from "@clerk/nextjs"
import { Gem, Home, Key, LucideIcon, Menu, Settings, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren, useState } from "react"
import { RocketIcon } from "../../../public"

interface SidebarItem {
  href: string
  icon: LucideIcon
  text: string
}

interface SidebarCategory {
  category: string
  items: SidebarItem[]
}

const SIDEBAR_ITEMS: SidebarCategory[] = [
  {
    category: "Overview",
    items: [{ href: "/dashboard", icon: Home, text: "Dashboard" }],
  },
  {
    category: "Account",
    items: [{ href: "/dashboard/upgrade", icon: Gem, text: "Upgrade" }],
  },
  {
    category: "Settings",
    items: [
      { href: "/dashboard/api-key", icon: Key, text: "API Key" },
      {
        href: "/dashboard/account-settings",
        icon: Settings,
        text: "Account Settings",
      },
    ],
  },
]

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const pathname = usePathname()
  console.log("params", pathname)

  return (
    <div className="space-y-4 md:space-y-6 relative z-20 flex flex-col h-full">
      {/* logo */}
      <div className="flex items-center gap-2 z-40 font-semibold">
        <Image src={RocketIcon} alt="Rocket Icon" className="size-10" />
        <p className="text-lg text-[#4cc9f0]">
          Ping<span className="text-[#e0aaff]">Pilot</span>
        </p>
      </div>

      {/* navigation items */}
      <div className="flex-grow">
        <ul>
          {SIDEBAR_ITEMS.map(({ category, items }) => (
            <li key={category} className="mb-4 md:mb-8">
              <p className="text-xs font-medium md:mb-2 leading-6 text-[#f8f9fa]">
                {category}
              </p>
              <div className="-mx-2 flex flex-1 flex-col">
                {items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "w-full justify-start mb-1 group flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium leading-6 text-zinc-400 hover:bg-[#f8f9fa] transition",
                      item.href === pathname
                        ? "bg-[#f8f9fa] text-zinc-900"
                        : "text-zinc-400"
                    )}
                    onClick={onClose}
                  >
                    <item.icon className="size-4 text-zinc-700 group-hover:text-zinc-700" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col">
        <hr className="my-4 md:my-6 w-full h-px border-gray-700" />

        <UserButton
          showName
          appearance={{
            elements: {
              userButtonBox: "flex-row-reverse",
            },
          }}
        />
      </div>
    </div>
  )
}

const Layout = ({ children }: PropsWithChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className="relative h-screen flex flex-col md:flex-row  overflow-hidden">
      {/* sidebar for desktop */}
      <div className="hidden md:block w-60 lg:w-72 border-r border-gray-900 p-6 h-full text-brand-900 relative z-10">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 z-40 font-semibold">
            <Image src={RocketIcon} alt="Rocket Icon" className="size-10" />
            <p className="text-lg text-[#4cc9f0]">
              Ping<span className="text-[#e0aaff]">Pilot</span>
            </p>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-gray-500 hover:text-gray-600"
          >
            <Menu className="size-6" />
          </button>
        </div>

        {/* main content area */}
        <div className="flex-1 overflow-y-auto  shadow-md p-4 md:p-6 relative z-10">
          <div className="relative min-h-full flex flex-col">
            <div className="h-full flex flex-col flex-1 space-y-4">
              {children}
            </div>
          </div>
        </div>

        <Modal
          className="p-4"
          showModal={isDrawerOpen}
          setShowModal={setIsDrawerOpen}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg/7 font-semibold text-brand-900">
              Ping<span className="text-brand-700">Pilot</span>
            </p>
            <button
              aria-label="Close modal"
              onClick={() => setIsDrawerOpen(false)}
            >
              <X className="size-6" />
            </button>
          </div>

          <Sidebar />
        </Modal>
      </div>
    </div>
  )
}

export default Layout
