import svgToDataUri from "mini-svg-data-uri"
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "open-sans": ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, #051937, #031c4a, #0f1e5d, #251c6d, #3e147b)",
        "custom-gradient":
          "radial-gradient(circle, #02142e, #081330, #0f1231, #161131, #1d0f31)",
        "custom-gradient-2":
          "radial-gradient(circle, #010d1f, #060b1c, #090919, #0b0716, #0c0613)",
        "custom-black-gradient":
          "radial-gradient(circle, #010408, #02050c, #05050f, #090511, #0f0412)",
      },
      colors: {
        brand: {
          "25": "#F8F9FD",
          "50": "#F0F4FA",
          "100": "#E1E9F6",
          "200": "#C3D3ED",
          "300": "#A5BDE4",
          "400": "#87A7DB",
          "500": "#6991D2",
          "600": "#4B76C9",
          "700": "#3659B1",
          "800": "#284189",
          "900": "#1B2A61",
          "950": "#111A3E",
        },
        "discord-gray": "#36393f",
        "discord-text": "#dcddde",
        "discord-timestamp": "#72767d",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },

      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      )
    },
  ],
}
export default config
