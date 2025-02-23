import { sendWhatsappTextMessage } from "@/lib/whatsapp"
import { NextResponse, type NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
  try {
    await sendWhatsappTextMessage()
    return NextResponse.json({ message: "Success" })
  } catch (error) {
    console.error("❌ Failed to send WhatsApp message:", error)
    return NextResponse.json(
      { message: "Failed to send WhatsApp message" },
      { status: 500 }
    )
  }
}
