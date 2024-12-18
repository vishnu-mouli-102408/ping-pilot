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
}: {
  discordId: string
}) => {
  const [discordId, setDiscordId] = useState(initialDiscordId)

  const { mutate, isPending } = useMutation({
    mutationFn: async (discordId: string) => {
      const res = await client.project.setDiscordID.$post({ discordId })
      return await res.json()
    },
    onSuccess: () => {
      toast.success("Discord ID updated successfully")
    },
  })

  return (
    <Card className="max-w-xl bg-[#003049] w-full space-y-4">
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
        <Link href="#" className="text-brand-500 hover:text-brand-500">
          Learn how to obtain it here
        </Link>
        .
      </p>

      <div className="pt-4">
        <Button onClick={() => mutate(discordId)} disabled={isPending}>
          {isPending ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Card>
  )
}
