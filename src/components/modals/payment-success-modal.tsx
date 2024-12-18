"use client"

import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { CheckIcon } from "lucide-react"
import Image from "next/image"
import { SuccessImage } from "../../../public"
import { LoadingSpinner } from "../LoadingSpinner"
import { Button } from "../ui/button"
import { Modal } from "./modal"

export const PaymentSuccessModal = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const { data, isPending } = useQuery({
    queryKey: ["user-plan"],
    queryFn: async () => {
      const res = await client.payment.getUserPlan.$get()
      return await res.json()
    },
    refetchInterval: (query) => {
      return query.state.data?.plan === "FREE" ? 1000 : false
    },
  })

  const handleClose = () => {
    setIsOpen(false)
    router.push("/dashboard")
  }

  const isPaymentSuccessful =
    data?.plan === "PRO" || data?.plan === "ENTERPRISE"

  return (
    <Modal
      showModal={isOpen}
      setShowModal={setIsOpen}
      onClose={handleClose}
      className="px-6 pt-6"
      preventDefaultClose={!isPaymentSuccessful}
    >
      <div className="flex flex-col items-center">
        {isPending || !isPaymentSuccessful ? (
          <div className="flex flex-col items-center justify-center h-64">
            <LoadingSpinner className="mb-4" />
            <p className="text-lg/7 font-medium text-gray-100">
              Upgrading your account...
            </p>
            <p className="text-gray-300 text-sm/6 mt-2 text-center text-pretty">
              Please wait while we process your upgrade. This may take a moment.
            </p>
          </div>
        ) : (
          <>
            <div className="relative aspect-video border border-gray-200 w-full overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={SuccessImage}
                className="h-full w-full object-cover"
                alt="Payment success"
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-1 text-center">
              <p className="text-lg/7 tracking-tight font-medium text-green-300 text-pretty">
                Upgrade successful! 🎉
              </p>
              <p className="text-gray-300 text-sm/6 text-pretty">
                Thank you for upgrading to Pro and supporting PingPanda. Your
                account has been upgraded.
              </p>
            </div>

            <div className="mt-8 w-full">
              <Button onClick={handleClose} className="h-12 w-full">
                <CheckIcon className="mr-2 size-5" />
                Go to Dashboard
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}
