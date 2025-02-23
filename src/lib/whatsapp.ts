const WHATSAPP_API_URL =
  "https://graph.facebook.com/v22.0/574181239111657/messages"

export async function sendWhatsappTextMessage() {
  try {
    const response = await fetch(WHATSAPP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: "919347489221",
        type: "template",
        template: { name: "hello_world", language: { code: "en_US" } },
      }),
    })

    const result = await response.json()
    console.log("🚀 RESPONSE", result)
  } catch (error) {
    console.error("❌ Failed to send WhatsApp message:", error)
    throw error
  }
}
