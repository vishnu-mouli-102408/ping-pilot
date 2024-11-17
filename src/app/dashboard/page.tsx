import { TopHeader } from "@/components"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

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

  return <TopHeader title="Dashboard Page">Dashboard Page Content</TopHeader>
}

export default Page
