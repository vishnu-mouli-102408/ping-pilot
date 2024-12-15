import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Open_Sans, Poppins, Roboto } from "next/font/google"

import { Providers } from "@/components"
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
})

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: true,
})
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Ping Pilot",
  description:
    "Ping Pilot is a versatile API-based platform designed to streamline notifications across popular social media channels. With Ping Pilot, developers can easily integrate APIs to trigger real-time alerts and updates on platforms like Discord, Telegram, SMS, and more. Perfect for automated messaging, user engagement, and broadcast notifications, Ping Pilot simplifies multi-channel notifications with minimal setup. Enhance your app's communication capabilities and reach your audience wherever they are with Ping Pilot's powerful notification APIs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        poppins.variable,
        openSans.variable,
        roboto.variable,
        "antialiased"
      )}
    >
      <body className="font-sans min-h-[calc(100vh-1px)] flex flex-col bg-custom-black-gradient text-white antialiased">
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            elements: {
              footer: {
                display: "none",
              },
            },
          }}
        >
          <main className="flex flex-col flex-1 relative">
            <Providers>{children}</Providers>
            <Toaster richColors />
          </main>
        </ClerkProvider>
      </body>
    </html>
  )
}
