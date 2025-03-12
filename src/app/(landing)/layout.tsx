import { Footer, Navbar } from "@/components"
import type { Metadata } from "next"
import { type ReactNode } from "react"

export const metadata: Metadata = {
  title: { absolute: "Ping Pilot" },
  description:
    "Ping Pilot Landing Page. A Modern Fullstack Event Monitoring SaaS.",
}

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
