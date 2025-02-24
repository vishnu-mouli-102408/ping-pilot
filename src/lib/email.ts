import nodemailer from "nodemailer"

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL!,
        pass: process.env.SMTP_PASSWORD!,
      },
    })

    await transporter.sendMail({
      from: `Ping Pilot <${process.env.SMTP_EMAIL!}>`,
      to,
      subject,
      html,
    })

    return true
  } catch (error) {
    console.error("❌ Failed to send Email message:", error)
    throw error
  }
}

export const eventNotificationEmail = (
  eventType: string,
  category: string,
  description: string,
  colorCode: string,
  timestamp: string,
  details: {
    name: string
    value: string
    inline: boolean
  }[]
) => {
  return `
	<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
	  <!-- Header -->
	  
		<h2 style="color: #333; margin-top: 10px;">🔔 ${eventType} Notification</h2>
	  </div>
  
	  <!-- Event Details -->
	  <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);">
		<p style="font-size: 16px; color: #333; margin: 5px 0;"><strong>📌 Category:</strong> ${category}</p>
		<p style="font-size: 16px; color: #333; margin: 5px 0;"><strong>📝 Description:</strong> ${description}</p>
		<p style="font-size: 16px; color: #333; margin: 5px 0;"><strong>🎨 Color Code:</strong> <span style="color: #${colorCode}; font-weight: bold;">#${colorCode}</span></p>
		<p style="font-size: 16px; color: #333; margin: 5px 0;"><strong>🕒 Timestamp:</strong> ${timestamp}</p>
  
		<hr style="border: 0; height: 1px; background: #ddd; margin: 15px 0;" />
  
		<!-- Event Specific Details -->
		<h3 style="color: #007bff; margin-bottom: 10px;">📌 Details:</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${details
          .map(
            (detail) =>
              `<tr>
                <td style="padding: 5px; font-weight: bold; text-align: ${
                  detail.inline ? "left" : "center"
                };">🔹 ${detail.name}:</td>
                <td style="padding: 5px; text-align: ${
                  detail.inline ? "left" : "center"
                };">
                  ${detail.value}
                </td>
              </tr>`
          )
          .join("")}
      </table>
	  </div>
  
	  <!-- Footer -->
	  <div style="text-align: center; margin-top: 20px;">
		<p style="color: #555;">Powered by <strong>Ping Pilot</strong> 🚀</p>
		<a href="https://pingpilot.vishnumouli.me/dashboard" 
		   style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-size: 14px;">
		  View Dashboard
		</a>
	  </div>
	</div>
	`
}
