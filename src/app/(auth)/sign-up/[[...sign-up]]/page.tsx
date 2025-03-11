import { SignUp } from "@clerk/nextjs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Ping Pilot Sign Up",
}

function Page() {
  return (
    <div className="w-full flex-1 flex min-h-[calc(100vh-72px)] items-center justify-center">
      <SignUp fallbackRedirectUrl="/welcome" forceRedirectUrl="/welcome" />
    </div>
  )
}

export default Page
