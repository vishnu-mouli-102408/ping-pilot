import { TopHeader } from "@/components"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ApiKeySettings } from "./api-key-settings"

export const metadata = {
  title: "API Key",
  description: "Update your API Key",
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
    <TopHeader title="API Key">
      <ApiKeySettings apiKey={user.apiKey ?? ""} />
    </TopHeader>
  )
}

export default Page
