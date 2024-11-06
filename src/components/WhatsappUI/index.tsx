import { RocketIcon } from "../../../public"
import { AnimatedList } from "../ui/animated-list"
import { MockWhatsAppUI } from "./mock-whatsapp-ui"
import { WhatsAppMessage } from "./whatsapp-message"

function WhatsappUI() {
  return (
    <MockWhatsAppUI>
      <AnimatedList>
        <WhatsAppMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          content={{
            name: "Mateo Ortiz",
            email: "mateo.ortiz@gmail.com",
          }}
          isBusinessMessage={false}
          isRead={true}
          isSender={false}
        />
        <WhatsAppMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          content={{
            amount: "$49.00",
            email: "zoe.martinez2001@email.com",
            plan: "PRO",
          }}
          isBusinessMessage={true}
          isRead={false}
          isSender={false}
        />
        <WhatsAppMessage
          avatarSrc={RocketIcon}
          avatarAlt="PingPilot Avatar"
          username="PingPilot"
          timestamp="Today at 12:35PM"
          content={{
            recurringRevenue: "$5.000 USD",
            growth: "+8.2%",
          }}
          isBusinessMessage={true}
          isRead={false}
          isSender={false}
        />
      </AnimatedList>
    </MockWhatsAppUI>
  )
}

export default WhatsappUI
