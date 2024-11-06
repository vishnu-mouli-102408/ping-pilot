import Image from "next/image"

interface TelegramMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  title: string
  content: {
    [key: string]: string
  }
}

export const TelegramMessage = ({
  avatarAlt,
  avatarSrc,
  content,
  timestamp,
  title,
  username,
}: TelegramMessageProps) => {
  return (
    <div className="flex items-start w-full py-2 px-4">
      {/* Avatar */}
      <Image
        src={avatarSrc}
        alt={avatarAlt}
        width={36}
        height={36}
        className="object-cover rounded-full mr-3"
      />

      <div className="flex flex-col w-full max-w-xl">
        {/* Username and Timestamp */}
        <div className="flex items-center space-x-2 mb-1">
          <p className="text-blue-500 text-sm font-semibold">{username}</p>
          <span className="text-gray-400 text-xs">{timestamp}</span>
        </div>

        {/* Message Bubble */}
        <div className="bg-[#e3f2fd] text-sm rounded-lg p-3 shadow-sm">
          {/* Title */}
          {title && <p className="text-gray-800 font-medium mb-1">{title}</p>}

          {/* Content */}
          {Object.entries(content).map(([key, value]) => (
            <p key={key} className="text-gray-700 text-sm">
              <span className="text-gray-600 font-semibold">{key}:</span>{" "}
              {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
