type PLAN = {
  id: string
  title: string
  desc: string
  monthlyPrice: number
  yearlyPrice: number
  badge?: string
  buttonText: string
  features: string[]
  link: string
}

export const PLANS: PLAN[] = [
  {
    id: "free",
    title: "Free",
    desc: "Get started with essential monitoring tools for your SaaS interactions",
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: "Get Started",
    features: [
      "Instant notifications for key events",
      "Monitor sales, new users, and more",
      "Basic social media integrations",
      "Limited to 1 platform",
      "Standard alerts for significant updates",
    ],
    link: "https://stripe.com/free-plan-link",
  },
  {
    id: "pro",
    title: "Pro",
    desc: "Unlock advanced features to monitor your SaaS with greater detail and flexibility",
    monthlyPrice: 10,
    yearlyPrice: 120,
    badge: "Most Popular",
    buttonText: "Upgrade to Pro",
    features: [
      "Real-time notifications for all important events",
      "Multiple social media integrations",
      "Priority email support",
      "Monitor sales, new users, and significant updates",
      "Enhanced insights and analytics",
      "Customizable event tracking",
      "Team collaboration tools",
      "Advanced user management features",
    ],
    link: "https://stripe.com/pro-plan-link",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    desc: "Tailored solutions for large organizations needing advanced monitoring and reporting",
    monthlyPrice: 15,
    yearlyPrice: 180,
    badge: "Contact Sales",
    buttonText: "Upgrade to Enterprise",
    features: [
      "Unlimited notifications for all events across multiple platforms",
      "Full access to all social media integrations",
      "Dedicated account manager for support",
      "Customizable analytics & reporting",
      "Enterprise-level security and privacy controls",
      "Priority support and custom SLA",
      "Advanced user roles and permissions",
      "One-time purchase for lifetime access",
    ],
    link: "https://stripe.com/enterprise-plan-link",
  },
]
