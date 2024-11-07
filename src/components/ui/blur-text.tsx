"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BlurIntProps {
  word: React.ReactNode | string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
}

export const BlurText = ({
  word,
  className,
  variant,
  duration = 1,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: -20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  }
  const combinedVariants = variant || defaultVariants

  const renderWord = () => {
    if (typeof word === "string") {
      return word.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index < word.split("\n").length - 1 && (
            <br className="hidden md:block" />
          )}
        </span>
      ))
    }
    return word // If it's JSX or ReactNode, render it directly
  }

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(className, "text-center tracking-[-0.02em] drop-shadow-sm")}
    >
      {renderWord()}
    </motion.h1>
  )
}
