"use client"

import { Heading } from "@/components"
import { LoadingSpinner } from "@/components/LoadingSpinner"
import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function Page() {
  const router = useRouter()
  const { data } = useQuery({
    queryKey: ["getDatabaseSyncStatus"],
    queryFn: async () => {
      const res = await client.auth.getDatabaseSyncStatus.$get()
      return await res.json()
    },
    refetchInterval: (query) => {
      return query.state.data?.status ? false : 1000
    },
  })

  useEffect(() => {
    if (data?.status) router.push("/dashboard")
  }, [data, router])

  return (
    <div className="flex w-full min-h-[calc(100vh-72px)] flex-1 items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="relative z-10 flex -translate-y-1/2 flex-col items-center gap-6 text-center">
        <LoadingSpinner size="md" />
        <Heading className="bg-gradient-to-r from-brand-300 to-brand-600 text-transparent bg-clip-text">
          Setting Up Your Account...
        </Heading>
        <p className="text-base/7 text-[#4cc9f0] max-w-prose">
          Please wait while we configure your account details. This won&apos;t
          take long!
        </p>
      </div>
    </div>
  )
}

export default Page
