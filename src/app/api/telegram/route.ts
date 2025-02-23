import { db } from "@/db"
import { sendTextMessage } from "@/lib/telegram"
import { NextResponse, type NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
  const data = await req.json()
  console.log(
    "📩 Telegram Update:",
    JSON.stringify(data?.message?.text, null, 2)
  )

  if (data?.message?.text?.startsWith("/start")) {
    const apiKey = data?.message?.text?.split(" ")[1]
    const chatId = data?.message?.chat?.id

    if (!chatId) {
      return NextResponse.json({ message: "Invalid chat id" }, { status: 401 })
    }

    if (!apiKey || apiKey.trim() === "") {
      return NextResponse.json({ message: "Invalid API key" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { apiKey },
    })

    if (!user) {
      return NextResponse.json({ message: "Invalid API key" }, { status: 401 })
    }

    const updateUser = await db.user.update({
      where: { id: user.id },
      data: { telegramUsername: String(chatId) },
    })

    if (!updateUser) {
      return NextResponse.json(
        { message: "Failed to update user" },
        { status: 500 }
      )
    }

    if (chatId && user) {
      await sendTextMessage(
        chatId,
        `Congratulations! You have successfully linked your Telegram account. You will now receive notifications on this chat.`
      )
    }
  } else {
    const chatId = data?.message?.chat?.id

    if (!chatId) {
      return NextResponse.json({ message: "Invalid chat id" }, { status: 401 })
    }

    await sendTextMessage(chatId, `You cannot send messages to this bot.`)
  }

  return NextResponse.json({ message: "Success", status: 200 })
}
