import { Navbar } from "@/components"
import { type ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout
