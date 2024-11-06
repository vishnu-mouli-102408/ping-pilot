import { RocketIcon } from "../../../public"
import { AnimatedList } from "../ui/animated-list"
import { DiscordMessage } from "./discord-message"
import { MockDiscordUI } from "./mock-discord-ui"

function DiscordUi() {
  return (
    <MockDiscordUI>
      <AnimatedList>
        <DiscordMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          badgeText="SignUp"
          badgeColor="#43b581"
          title="👤 New user signed up"
          content={{
            name: "Mateo Ortiz",
            email: "m.ortiz19@gmail.com",
          }}
        />
        <DiscordMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          badgeText="Revenue"
          badgeColor="#faa61a"
          title="💰 Payment received"
          content={{
            amount: "$49.00",
            email: "zoe.martinez2001@email.com",
            plan: "PRO",
          }}
        />
        <DiscordMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 5:11AM"
          badgeText="Milestone"
          badgeColor="#5865f2"
          title="🚀 Revenue Milestone Achieved"
          content={{
            recurringRevenue: "$5.000 USD",
            growth: "+8.2%",
          }}
        />
      </AnimatedList>
    </MockDiscordUI>
  )
}

export default DiscordUi
