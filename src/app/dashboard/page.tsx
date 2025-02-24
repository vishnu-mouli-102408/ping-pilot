import { CreateEventCategoryModal, TopHeader } from "@/components"
import { PaymentSuccessModal } from "@/components/modals/payment-success-modal"
import Popup from "@/components/Popup"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { createCheckoutSession } from "@/lib/stripe"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"
import DashboardPageContent from "./dashboard-page-content"

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function Page({ searchParams }: PageProps) {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    return redirect("/welcome")
  }

  const intent = searchParams.intent

  if (intent === "upgrade") {
    const session = await createCheckoutSession({
      userEmail: user.email,
      userId: user.id,
      plan: "PRO",
    })

    if (session.url) redirect(session.url)
  }

  const success = searchParams.success

  return (
    <>
      <Popup />
      {success ? <PaymentSuccessModal /> : null}
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
    </>
  )
}

export default Page
