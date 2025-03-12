"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { RocketIcon } from "../../../public/"

import { useChat } from "@ai-sdk/react"
import { ChatRequestOptions } from "@ai-sdk/ui-utils"
import { AnimatePresence, motion } from "framer-motion"
import {
  AlertTriangle,
  Maximize2,
  Minimize2,
  RefreshCw,
  Send,
  Sparkles,
  X,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Alert, AlertDescription } from "../ui/alert"
import { ChatMessage } from "./chat-message"

const formatTimestamp = () => {
  const now = new Date()
  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

const LoadingDots = () => (
  <div className="flex space-x-1 items-center">
    <motion.div
      className="size-2 bg-gray-400 dark:bg-gray-600 rounded-full"
      animate={{ scale: [0.6, 1, 0.6] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="size-2 bg-gray-400 dark:bg-gray-600 rounded-full"
      animate={{ scale: [0.6, 1, 0.6] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.3,
      }}
    />
    <motion.div
      className="size-2 bg-gray-400 dark:bg-gray-600 rounded-full"
      animate={{ scale: [0.6, 1, 0.6] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.6,
      }}
    />
  </div>
)

const ErrorBox = ({
  error,
  onReload,
}: {
  error: Error
  onReload: (
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-4"
  >
    <Alert className="bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="size-4 text-red-500 dark:text-red-400" />
          <AlertDescription className="text-red-700 dark:text-red-300 font-medium">
            {error?.message || "Something went wrong"}
          </AlertDescription>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => onReload()}
          className="flex items-center justify-center text-xs w-full border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-800/20"
        >
          <RefreshCw className="size-3 mr-1" /> Try again
        </Button>
      </div>
    </Alert>
  </motion.div>
)

const AiChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [showChatIcon, setShowChatIcon] = useState(false)
  const [messageTimestamps, setMessageTimestamps] = useState<
    Record<number, string>
  >({})
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const {
    messages,
    input,
    handleSubmit,
    handleInputChange,
    isLoading,
    stop,
    reload,
    error,
    status,
  } = useChat({ api: "/api/gemini" })

  // Add timestamp when new messages arrive
  useEffect(() => {
    const currentTimestamp = formatTimestamp()
    const newTimestamps: Record<number, string> = {}

    messages.forEach((_, index) => {
      if (!messageTimestamps[index]) {
        newTimestamps[index] = currentTimestamp
      }
    })

    if (Object.keys(newTimestamps).length > 0) {
      setMessageTimestamps((prev) => ({ ...prev, ...newTimestamps }))
    }
  }, [messageTimestamps, messages, messages.length])

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcon(true)
      } else {
        setShowChatIcon(false)
        setIsChatOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollAreaRef.current && messages.length > 0) {
      //   setTimeout(() => {
      //     const scrollContainer = (
      //       scrollAreaRef.current as unknown as HTMLElement
      //     )?.querySelector("[data-radix-scroll-area-viewport]")
      //     if (scrollContainer) {
      //       scrollContainer.scrollTop = scrollContainer.scrollHeight
      //     }
      //   }, 100)
      scrollAreaRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      handleSubmit(e)
    }
  }

  return (
    <>
      {/* Chat toggle button */}
      {!isChatOpen && showChatIcon && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleChat}
          className="fixed bottom-6 right-6 size-14 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 text-white shadow-lg flex items-center justify-center z-50"
        >
          <Sparkles className="size-6" />
        </motion.button>
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "auto",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[95%] sm:w-[400px] md:w-[450px]"
          >
            <Card className="border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
              <CardHeader className="py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-500">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={RocketIcon}
                      alt="Rocket Icon"
                      className="size-8 md:size-10 cursor-pointer"
                    />
                    <CardTitle className="text-white text-lg font-semibold">
                      Ping Pilot AI Assistant
                    </CardTitle>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={toggleMinimize}
                      className="text-white hover:bg-white/20 size-10 rounded-full p-2"
                    >
                      {isMinimized ? (
                        <Maximize2 className="size-4" />
                      ) : (
                        <Minimize2 className="size-4" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={toggleChat}
                      className="text-white hover:bg-white/20 size-10 rounded-full p-2"
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Chat content */}
              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardContent className="p-4">
                      <ScrollArea
                        className="h-[350px] pr-4"
                        // ref={scrollAreaRef}
                      >
                        {messages.length > 0 &&
                          messages.map((message, index) => (
                            <ChatMessage
                              key={index}
                              message={message.content}
                              isUser={message.role === "user"}
                              timestamp={messageTimestamps[index]}
                            />
                          ))}

                        {isLoading && (
                          <ChatMessage
                            message=""
                            isUser={false}
                            isLoading={true}
                          />
                        )}

                        {error && <ErrorBox error={error} onReload={reload} />}

                        {messages?.length === 0 && !isLoading && (
                          <div className="h-full flex flex-col items-center justify-center text-center p-6">
                            <motion.div
                              className="size-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4"
                              animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                  "0 0 0 0 rgba(124, 58, 237, 0)",
                                  "0 0 0 10px rgba(124, 58, 237, 0.1)",
                                  "0 0 0 0 rgba(124, 58, 237, 0)",
                                ],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <Sparkles className="size-8 text-purple-500" />
                            </motion.div>
                            <h3 className="font-medium text-lg mb-2">
                              How can I help you today?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              Ask me anything! I&apos;m here to assist with
                              information, or just to chat.
                            </p>
                          </div>
                        )}
                        <div ref={scrollAreaRef}></div>
                      </ScrollArea>
                    </CardContent>

                    <CardFooter className="p-3 border-t bg-gray-50 dark:bg-gray-900">
                      <form
                        ref={formRef}
                        className="flex w-full items-center gap-2"
                        noValidate
                        // onSubmit={handleFormSubmit}
                        onSubmit={(e) => {
                          e.preventDefault()
                          handleFormSubmit(e)
                        }}
                      >
                        <Input
                          placeholder="Type your message..."
                          value={input}
                          onChange={handleInputChange}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault()
                              formRef.current?.requestSubmit()
                            }
                          }}
                          className="flex-1"
                        />
                        <Button
                          type="submit"
                          disabled={!input.trim() || isLoading}
                          size="icon"
                          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full"
                        >
                          {isLoading ? (
                            <RefreshCw className="size-4 animate-spin" />
                          ) : (
                            <Send className="size-4" />
                          )}
                        </Button>
                      </form>
                    </CardFooter>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AiChat
