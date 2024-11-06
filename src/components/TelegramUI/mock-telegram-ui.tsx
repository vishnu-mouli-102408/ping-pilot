import {
  AlignJustify,
  Menu,
  Paperclip,
  Phone,
  Search,
  SearchIcon,
  Send,
  Smile,
  UserCircle,
  Video,
} from "lucide-react"
import Image from "next/image"
import { PropsWithChildren } from "react"
import { RocketIcon } from "../../../public"

export const MockTelegramUI = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl">
      {/* chat list */}
      <div className="hidden sm:flex w-[320px] bg-[#1e1f21] flex-col">
        <div className="px-4 h-16 border-b gap-4 border-gray-700 flex items-center shadow-sm">
          <AlignJustify />
          <div className="w-full  bg-gray-900 text-sm rounded-full px-2  h-10 flex items-center justify-start text-gray-500 cursor-not-allowed">
            <SearchIcon className="mr-2" /> Search
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 px-2 mb-2 uppercase">
              Chats
            </h3>

            <div className="flex items-center px-2 py-2 rounded bg-[#2a2b2e] text-white cursor-pointer">
              <Image
                src={RocketIcon}
                alt="User Avatar"
                width={32}
                height={32}
                className="object-cover rounded-full mr-3"
              />
              <div className="flex flex-col">
                <span className="font-medium text-white">Ping Pilot</span>
                <span className="text-sm text-gray-400">
                  Hey there! What&apos;s Up?{" "}
                </span>
              </div>
            </div>

            {/* Repeat for other chat contacts */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-center my-2 px-2 py-2 rounded hover:bg-[#2a2b2e] text-gray-400 cursor-pointer"
              >
                <div className="size-8 rounded-full bg-gray-700 mr-3" />
                <span className="font-medium">User {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* main chat area */}
      <div className="flex-1 flex flex-col">
        {/* chat header */}
        <div className="h-16 bg-[#2b2d31] flex items-center px-4 shadow-sm border-b border-gray-700">
          <div className="md:hidden mr-4">
            <Menu className="size-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          <div className="flex items-center">
            <Image
              src={RocketIcon}
              alt="Chat Avatar"
              width={40}
              height={40}
              className="object-cover rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-white">Ping Pilot</p>
              <p className="text-sm text-gray-400">Online</p>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4 text-gray-400">
            <Phone className="size-5 hover:text-white cursor-pointer hidden sm:block" />
            <Video className="size-5 hover:text-white cursor-pointer hidden sm:block" />
            <UserCircle className="size-5 hover:text-white cursor-pointer hidden sm:block" />
            <Search className="size-5 hover:text-white cursor-pointer hidden sm:block" />
          </div>
        </div>

        {/* message history */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-800 flex flex-col-reverse">
          {children}
        </div>

        {/* message input */}
        <div className="p-4 bg-[#2b2d31] cursor-not-allowed">
          <div className="flex items-center bg-[#40444b] rounded-full p-2">
            <Paperclip className="mx-3 text-gray-400 hover:text-white cursor-pointer" />
            <input
              readOnly
              type="text"
              placeholder="Message"
              className="flex-1 bg-transparent py-2 px-1 text-white placeholder-gray-500 focus:outline-none"
            />
            <div className="flex items-center space-x-3 mx-3 text-gray-400">
              <Smile className="size-5 hover:text-white cursor-pointer hidden sm:block" />
              <Send className="size-5 hover:text-white cursor-pointer hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
