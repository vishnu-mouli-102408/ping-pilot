"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AnimatePresence, motion } from "framer-motion"
import { CheckIcon } from "lucide-react"

import { PLANS } from "@/constants"
import { client } from "@/lib/client"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Container from "../Global/container"
import { Button } from "../ui/button"
import NumberTicker from "../ui/number-ticker"
import { SectionBadge } from "../ui/section-badge"

type Plan = "monthly" | "yearly"

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <SectionBadge title="Choose your plan" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading bg-gradient-to-r from-brand-300 to-[#b5179e] text-transparent bg-clip-text font-medium !leading-snug mt-6">
            Transparent pricing you can trust
          </h2>
          <p
            id="pricing"
            className="text-base md:text-lg text-center text-[#4cc9f0] mt-6"
          >
            Choose the plan that works best for you. Transparent and
            straightforward pricing.
          </p>
        </div>
      </Container>
      <div className="mt-8 w-full relative flex flex-col items-center justify-center">
        <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
        <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
        <Container>
          <Tabs
            defaultValue="monthly"
            className="w-full flex flex-col items-center justify-center"
          >
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
                {PLANS.map((plan, index) => (
                  <Plan key={index} index={index} {...plan} plan="monthly" />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
                {PLANS.map((plan, index) => (
                  <Plan key={index} index={index} {...plan} plan="yearly" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </div>
    </div>
  )
}

const Plan = ({
  id,
  title,
  desc,
  monthlyPrice,
  yearlyPrice,
  buttonText,
  features,
  index,
  plan,
}: {
  id: string
  title: string
  desc: string
  monthlyPrice: number
  yearlyPrice: number
  buttonText: string
  features: string[]
  index: number
  plan: Plan
}) => {
  const getDisplayedPrice = (
    plan: string,
    monthlyPrice: number,
    yearlyPrice: number
  ) => {
    if (plan === "monthly") {
      return monthlyPrice === 0 ? 0 : monthlyPrice
    } else if (plan === "yearly") {
      const discountedPrice = Math.round((yearlyPrice * 0.8) / 12)
      return yearlyPrice === 0 ? 0 : discountedPrice
    }
    return 0
  }

  const displayedPrice = getDisplayedPrice(plan, monthlyPrice, yearlyPrice)

  const router = useRouter()
  const { user } = useUser()

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async (planName: "PRO" | "ENTERPRISE") => {
      const res = await client.payment.createCheckoutSession.$post({
        plan: planName,
      })
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
  })

  const handleGetAccess = (plan: string) => {
    if (user) {
      createCheckoutSession(plan === "pro" ? "PRO" : "ENTERPRISE")
    } else {
      router.push("/sign-in?intent=upgrade")
    }
  }

  return (
    <div
      key={index}
      className="w-full relative flex flex-col saturate-150 rounded-2xl"
    >
      <div
        className={cn(
          "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
          id === "pro" ? "border-[#7C3AB6]" : "border-[#292829]"
        )}
      >
        {id === "pro" && (
          <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-[#7544BE] to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
            <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-white to-[#3a0e33]  bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex flex-col p-3 w-full">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm mt-2 text-[#4895ef] break-words">{desc}</p>
        </div>
        <hr
          className="shrink-0 border-none w-full h-px bg-border"
          role="separator"
        />
        <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
          <div className="flex items-end gap-2">
            <div className="flex items-end gap-1 w-48">
              <span className="text-3xl md:text-4xl font-bold">
                $
                {displayedPrice === 0 ? (
                  0
                ) : (
                  <NumberTicker value={displayedPrice} />
                )}
              </span>
              {/* In here 120 * 0.8 = 96 and /12 to get monthly price */}
              <span className="text-lg text-[#4895ef] font-medium font-heading">
                per {plan === "monthly" ? "month" : "month"}
              </span>
            </div>
            <AnimatePresence>
              {id !== "free" && plan === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                  className="text-xs px-2 py-0.5 rounded mb-1 text-[#04040A] bg-[#7544BE] font-medium"
                >
                  -20%
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-[#4cc9f0]"
                />
                <p className="text-sm md:text-base text-[#4895ef]">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 mt- h-auto flex w-full items-center">
          <Button
            onClick={() => handleGetAccess(id)}
            asChild
            variant={id === "pro" ? "default" : "tertiary"}
            className="w-full hover:scale-100 hover:translate-y-0 shadow-none text-white"
          >
            <Link href={"#pricing"}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
