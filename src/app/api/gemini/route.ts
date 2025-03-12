import { initialMessage } from "@/lib/data"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { Message, streamText } from "ai"
import type { NextRequest } from "next/server"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
})

export const runtime = "nodejs"

const generateId = () => {
  return Math.random().toString(36).substring(2, 15)
}

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
]

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  const stream = await streamText({
    model: google("gemini-1.5-pro"),
    messages: buildGoogleGenAIPrompt(messages),
    temperature: 0.7,
  })
  return stream.toDataStreamResponse()
}
