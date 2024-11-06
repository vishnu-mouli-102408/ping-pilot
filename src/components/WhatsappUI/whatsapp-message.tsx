import { cn } from "@/lib/utils"
import { Check, CheckCheck } from "lucide-react"
import Image from "next/image"

interface WhatsAppMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  content: {
    [key: string]: string
  }
  isBusinessMessage?: boolean
  isRead?: boolean
  isSender?: boolean
}

export const WhatsAppMessage = ({
  avatarAlt,
  avatarSrc,
  content,
  timestamp,
  username,
  isBusinessMessage = true,
  isRead = false,
  isSender = false,
}: WhatsAppMessageProps) => {
  return (
    <div
      className={`flex ${
        isSender ? "justify-end" : "justify-start"
      } items-start w-full py-2 px-4`}
    >
      {!isSender && (
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={36}
          height={36}
          className="object-cover rounded-full mr-3"
        />
      )}

      <div
        className={`flex flex-col w-full max-w-md ${
          isSender ? "items-end" : ""
        }`}
      >
        {/* Username */}
        {!isSender && <p className="text-sm text-gray-500 mb-1">{username}</p>}

        {/* Message Bubble */}
        <div
          className={cn(
            "p-3 rounded-lg shadow-sm max-w-full",
            isBusinessMessage ? "bg-[#d9fdd3]" : "bg-white",
            isSender ? "rounded-br-none" : "rounded-bl-none"
          )}
        >
          {/* Content */}
          {Object.entries(content).map(([key, value]) => (
            <p key={key} className="text-gray-800 text-sm">
              <span className="font-semibold">{key}:</span> {value}
            </p>
          ))}

          {/* Timestamp and Read Receipts */}
          <div className="flex items-center justify-end mt-1 text-xs text-gray-500 space-x-1">
            <span>{timestamp}</span>
            {isSender &&
              (isRead ? (
                <CheckCheck className="text-blue-500 size-3" />
              ) : (
                <Check className="size-3" />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
