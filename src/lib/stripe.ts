import type { Plan } from "@prisma/client"
import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-11-20.acacia",
  typescript: true,
})

export const createCheckoutSession = async ({
  userEmail,
  userId,
  plan,
}: {
  userEmail: string
  userId: string
  plan: Plan
}) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price:
          plan === "PRO"
            ? "price_1QXKQuAcD26GCL9DVg8vntZk"
            : "price_1QXLHAAcD26GCL9DQGL67Qfz",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}#pricing`,
    customer_email: userEmail,
    metadata: {
      userId,
    },
  })

  return session
}
