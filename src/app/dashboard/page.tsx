import { TopHeader } from "@/components"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import DashboardPageContent from "./dashboard-page-content"

async function Page() {
  const auth = await currentUser()

  const user = await db.user.findUnique({
    where: {
      externalId: auth?.id,
    },
  })

  if (!auth || !user) {
    redirect("/sign-in")
  }

  return (
    <TopHeader title="Dashboard Page">
      <DashboardPageContent />
    </TopHeader>
  )
}

export default Page
