"use client"
import { useEffect, useState } from "react"
import DiscordUi from "./DiscordUI"
import TelegramUI from "./TelegramUI"
import WhatsappUI from "./WhatsappUI"

const uiComponents = [DiscordUi, TelegramUI, WhatsappUI]

function AnimationUI() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)
  const ComponentToRender = uiComponents[currentComponentIndex]

  useEffect(() => {
    // Interval for switching components every 5 seconds
    const interval = setInterval(() => {
      setCurrentComponentIndex((prevIndex) =>
        prevIndex === uiComponents.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 5000ms = 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="transition-opacity duration-700 ease-in-out opacity-100">
      <ComponentToRender />
    </div>
  )
}

export default AnimationUI
