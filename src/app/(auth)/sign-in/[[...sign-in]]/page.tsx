"use client"

import { SignIn } from "@clerk/nextjs"
import { useSearchParams } from "next/navigation"

function Page() {
  const searchParams = useSearchParams()
  const intent = searchParams.get("intent")

  return (
    <div className="w-full flex-1 min-h-[calc(100vh-72px)] flex items-center justify-center">
      <SignIn
        fallbackRedirectUrl={intent ? `/dashboard/${intent}` : "/dashboard"}
        forceRedirectUrl="/welcome"
      />
    </div>
  )
}

export default Page
