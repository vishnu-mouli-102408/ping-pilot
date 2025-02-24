import { Footer, Navbar } from "@/components"
import Popup from "@/components/Popup"
import { type ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Popup />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
