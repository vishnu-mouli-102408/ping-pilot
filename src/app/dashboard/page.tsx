import { CreateEventCategoryModal, TopHeader } from "@/components"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
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
    <TopHeader
      cta={
        <CreateEventCategoryModal>
          <Button className="w-full sm:w-fit">
            <PlusIcon className="size-4 mr-2" />
            Add Category
          </Button>
        </CreateEventCategoryModal>
      }
      title="Dashboard Page"
    >
      <DashboardPageContent />
    </TopHeader>
  )
}

export default Page
