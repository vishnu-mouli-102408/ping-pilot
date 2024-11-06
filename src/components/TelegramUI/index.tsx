import { RocketIcon } from "../../../public"
import { AnimatedList } from "../ui/animated-list"
import { MockTelegramUI } from "./mock-telegram-ui"
import { TelegramMessage } from "./telegram-message"

function TelegramUI() {
  return (
    <MockTelegramUI>
      <AnimatedList>
        <TelegramMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          title="👤 New user signed up"
          content={{
            name: "Mateo Ortiz",
            email: "Hello@gmail.com",
          }}
        />
        <TelegramMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          title="💰 Payment received"
          content={{
            amount: "$49.00",
            email: "zoe.martinez2001@email.com",
            plan: "PRO",
          }}
        />
        <TelegramMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          title="🚀 Revenue Milestone Achieved"
          content={{
            recurringRevenue: "$5.000 USD",
            growth: "+8.2%",
          }}
        />
      </AnimatedList>
    </MockTelegramUI>
  )
}

export default TelegramUI
