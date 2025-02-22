import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"

export const dynamic = "force-dynamic"

export const authRouter = router({
  getDatabaseSyncStatus: publicProcedure.query(async ({ c, ctx }) => {
    const auth = await currentUser()

    if (!auth) {
      return c.json({
        status: false,
        message: "Not authenticated. User is not Synced with the Database.",
      })
    }

    const user = await db.user.findFirst({
      where: {
        externalId: auth.id,
      },
    })

    console.log("USER IN DB:", user)

    if (!user) {
      await db.user.create({
        data: {
          externalId: auth.id,
          email: auth.emailAddresses[0].emailAddress,
          whatsappNumber: auth.phoneNumbers[0].phoneNumber ?? null,
          quotaLimit: 100,
        },
      })
      return c.json({
        status: true,
        message: "User created and Synced with the Database.",
      })
    }

    return c.json({
      status: true,
      message: "User is Synced with the Database.",
    })
  }),
})
