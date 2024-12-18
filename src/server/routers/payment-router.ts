import { createCheckoutSession } from "@/lib/stripe"
import { z } from "zod"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"

export const paymentRouter = router({
  createCheckoutSession: privateProcedure
    .input(
      z.object({
        plan: z.enum(["PRO", "ENTERPRISE"]),
      })
    )
    .mutation(async ({ c, ctx, input }) => {
      const { user } = ctx
      const { plan } = input

      const session = await createCheckoutSession({
        userEmail: user.email,
        userId: user.id,
        plan: plan,
      })

      return c.json({ url: session.url })
    }),

  getUserPlan: privateProcedure.query(async ({ c, ctx }) => {
    const { user } = ctx
    return c.json({ plan: user.plan })
  }),
})
