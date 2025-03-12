"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { CircleUser, Sparkles } from "lucide-react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import remarkGfm from "remark-gfm"
import { Avatar } from "../ui/avatar"

interface ChatMessageProps {
  message: string
  isUser: boolean
  isLoading?: boolean
  timestamp?: string
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

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  isLoading = false,
  timestamp,
}) => {
  const [imageError, setImageError] = useState<Record<string, boolean>>({})

  // Determine wrapper class for markdown content based on user type
  const markdownWrapperClass = cn(
    "prose prose-sm max-w-none break-words",
    !isUser &&
      "prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-200"
  )

  return (
    <motion.div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex ${
          isUser ? "flex-row-reverse" : "flex-row"
        } items-start gap-2 max-w-[85%]`}
      >
        <Avatar
          className={cn(
            "size-8 flex-shrink-0",
            isUser
              ? "bg-blue-600"
              : "bg-gradient-to-br from-purple-600 to-indigo-600"
          )}
        >
          {isUser ? (
            <CircleUser className="size-5 absolute top-[6px] left-[6px] text-white" />
          ) : (
            <Sparkles className="size-5 absolute top-[6px] left-[6px] text-white" />
          )}
        </Avatar>

        <div
          className={cn(
            "py-3 px-4 rounded-2xl shadow-sm",
            isUser
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
              : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
          )}
        >
          {isLoading ? (
            <LoadingDots />
          ) : (
            <div className={markdownWrapperClass}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={{
                  //@ts-ignore
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                      <div className="my-3 rounded-md overflow-hidden">
                        <SyntaxHighlighter
                          style={atomDark}
                          language={"javascript"}
                          //   PreTag="div"
                          customStyle={{
                            borderRadius: "4px",
                            margin: 0,
                            backgroundColor: "#1E1E1E",
                            padding: "1rem",
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                          }}
                          //   showLineNumbers
                          //   {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code
                        className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200 text-sm font-mono"
                        {...props}
                      >
                        {children}
                      </code>
                    )
                  },
                  img({ src, alt, ...props }) {
                    return (
                      <div className="my-2">
                        {!imageError[src || ""] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={src || ""}
                            alt={alt || ""}
                            className="rounded-md max-w-full h-auto"
                            onError={() =>
                              setImageError((prev) => ({
                                ...prev,
                                [src || ""]: true,
                              }))
                            }
                            {...props}
                          />
                        ) : (
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 text-center text-sm text-gray-500">
                            Unable to load image: {alt}
                          </div>
                        )}
                      </div>
                    )
                  },
                  table({ children }) {
                    return (
                      <div className="overflow-x-auto my-4">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-md">
                          {children}
                        </table>
                      </div>
                    )
                  },
                  th({ children }) {
                    return (
                      <th className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                        {children}
                      </th>
                    )
                  },
                  td({ children }) {
                    return (
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                        {children}
                      </td>
                    )
                  },
                  blockquote({ children }) {
                    return (
                      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-3 text-gray-700 dark:text-gray-300">
                        {children}
                      </blockquote>
                    )
                  },
                  a({ children, href, ...props }) {
                    return (
                      <a
                        href={href}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      >
                        {children}
                      </a>
                    )
                  },
                  li({ children }) {
                    return <li className="my-1">{children}</li>
                  },
                }}
              >
                {message}
              </ReactMarkdown>
            </div>
          )}

          {timestamp && (
            <div
              className={`text-xs mt-1 ${
                isUser ? "text-blue-200" : "text-gray-400"
              } text-right`}
            >
              {timestamp}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ChatMessage
