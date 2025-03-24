"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { client } from "@/lib/client"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

export const AccountSettings = ({
  discordId: initialDiscordId,
  apiKey,
  whatsappNumber: initialWhatsappNumber,
}: {
  discordId: string
  apiKey: string
  whatsappNumber: string
}) => {
  const [discordId, setDiscordId] = useState(initialDiscordId)

  const [whatsappNumber, setWhatsappNumber] = useState(initialWhatsappNumber)

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: {
      discordId: string

      whatsappNumber: string
    }) => {
      const res = await client.project.updateAccountSettings.$post({
        discordId: data?.discordId,

        whatsappNumber: data?.whatsappNumber,
      })
      return await res.json()
    },
    onSuccess: () => {
      toast.success("Account settings updated successfully")
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred. Please try again.")
    },
  })

  return (
    <Card className="max-w-xl p-4 bg-[#003049] w-full space-y-4">
      <div className="flex flex-col gap-4">
        <div>
          <div className="pt-2">
            <Label>Discord ID</Label>
            <Input
              className="mt-1 bg-[#edf2f4] text-gray-900"
              value={discordId}
              onChange={(e) => setDiscordId(e.target.value)}
              placeholder="Enter your Discord ID"
            />
          </div>

          <p className="mt-2 text-sm/6 text-gray-400">
            Don&apos;t know how to find your Discord ID?{" "}
            <Link
              href="https://support.playhive.com/discord-user-id/"
              target="_blank"
              className="text-brand-500 hover:text-brand-500"
            >
              Learn how to obtain it here
            </Link>
            .
          </p>
        </div>
        <div>
          <div className="pt-2">
            <Label>Whatsapp Number</Label>
            <Input
              type="tel"
              className="mt-1 bg-[#edf2f4] text-gray-900"
              value={whatsappNumber}
              onChange={(e) => {
                const value = e.target.value
                if (/^\d*$/.test(value)) {
                  setWhatsappNumber(value)
                }
              }}
              placeholder="Enter your Whatsapp Number"
            />
          </div>
        </div>
        <div>
          <p className="mt-2 text-sm/6 text-gray-200">
            Stay ahead! Activate our PingPilot Telegram bot to receive instant
            notifications and alerts. Your events, at your fingertips.{" "}
            <Link
              href={`https://t.me/ping_pilot_bot?start=${apiKey}`}
              target="_blank"
              className="text-brand-500 hover:text-brand-600"
            >
              Click here to Start using PingPilot Telegram bot
            </Link>
          </p>
        </div>
      </div>

      <div className="pt-4">
        <Button
          onClick={() => mutate({ discordId, whatsappNumber })}
          disabled={isPending}
        >
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Card>
  )
}
