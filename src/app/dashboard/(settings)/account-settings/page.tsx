import { TopHeader } from "@/components"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { AccountSettings } from "./settings-page-content"

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
        telegramUsername={user?.telegramUsername ?? ""}
        whatsappNumber={user?.whatsappNumber ?? ""}
        discordId={user.discordId ?? ""}
      />
    </TopHeader>
  )
}

export default Page
