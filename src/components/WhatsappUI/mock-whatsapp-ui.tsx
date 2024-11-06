import {
  Menu,
  MessageCircle,
  MoreVertical,
  Paperclip,
  Phone,
  Search,
  Send,
  Smile,
  Video,
} from "lucide-react"
import Image from "next/image"
import { PropsWithChildren } from "react"
import { OrgamiPlaneIcon, RocketIcon } from "../../../public"

export const MockWhatsAppUI = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl">
      {/* Chat List */}
      <div className="hidden sm:flex w-[320px] bg-[#26333a] flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-16 bg-[#2a3942]">
          <Image
            src={RocketIcon}
            alt="Your Avatar"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
          <div className="flex space-x-4 text-gray-400">
            <Menu className="hover:text-white cursor-pointer" />
            <MessageCircle className="hover:text-white cursor-pointer" />
            <MoreVertical className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-2 bg-[#131c21] border-b border-gray-700">
          <div className="flex items-center bg-[#323739] rounded-lg px-3 py-1">
            <Search className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="flex-1 bg-transparent text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center px-4 py-3 hover:bg-[#323739] cursor-pointer"
            >
              <Image
                src={i === 0 ? RocketIcon : OrgamiPlaneIcon}
                alt={`Contact ${i}`}
                width={40}
                height={40}
                className="object-cover rounded-full mr-3"
              />
              <div className="flex flex-col">
                <span className="font-medium text-white">
                  {i === 0 ? "Ping Pilot" : `Contact ${i + 1}`}
                </span>
                <span className="text-sm text-gray-400">
                  {i === 0 ? "Hey there! What's Up?" : "Last message"}
                </span>
              </div>
              <span className="ml-auto text-xs text-gray-500">10:30 AM</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#0d1418]">
        {/* Chat Header */}
        <div className="h-16 bg-[#2a3942] flex items-center px-4 shadow-sm">
          <Image
            src={RocketIcon}
            alt="Chat Avatar"
            width={40}
            height={40}
            className="object-cover rounded-full mr-3"
          />
          <div className="flex-1">
            <p className="font-semibold text-white">Ping Pilot</p>
            <p className="text-sm text-gray-400">online</p>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <Phone className="hover:text-white cursor-pointer" />
            <Video className="hover:text-white cursor-pointer" />
            <MoreVertical className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Message History */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#0d1418] flex flex-col-reverse">
          {children}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-[#1e2b33]">
          <div className="flex items-center bg-[#2a3942] rounded-full px-3 py-2">
            <Smile className="text-gray-400 hover:text-white cursor-pointer mr-3" />
            <Paperclip className="text-gray-400 hover:text-white cursor-pointer mr-3" />
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
            />
            <Send className="text-gray-400 hover:text-white cursor-pointer ml-3" />
          </div>
        </div>
      </div>
    </div>
  )
}
