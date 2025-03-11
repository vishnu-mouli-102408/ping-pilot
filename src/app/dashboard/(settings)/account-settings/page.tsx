import { TopHeader } from "@/components"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { AccountSettings } from "./settings-page-content"

export const metadata: Metadata = {
  title: "Account Settings",
  description: "Update your account settings",
}

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/sign-in")
  }

  return (
    <TopHeader title="Account Settings">
      <AccountSettings
        apiKey={user?.apiKey ?? ""}
        whatsappNumber={user?.whatsappNumber ?? ""}
        discordId={user.discordId ?? ""}
      />
    </TopHeader>
  )
}

export default Page
