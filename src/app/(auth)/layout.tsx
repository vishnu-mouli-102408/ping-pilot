import { Navbar, Footer } from "@/components"
import { type ReactNode } from "react"

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
