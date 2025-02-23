const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`

/**
 * Sends a message to a Telegram user
 * @param chatId - The Telegram Chat ID
 * @param text - The message text
 */
export async function sendTextMessage(chatId: string, text: string) {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    })

    const result = await response.json()
    if (!response.ok) throw new Error(result.description)

    return result
  } catch (error) {
    console.error("❌ Failed to send Telegram message:", error)
    throw error
  }
}
