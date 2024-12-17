import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import { TopHeader } from "@/components"
import { UpgradePageContent } from "./upgrade-page-content"

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
    <TopHeader title="Pro Membership">
      <UpgradePageContent plan={user.plan} />
    </TopHeader>
  )
}

export default Page
