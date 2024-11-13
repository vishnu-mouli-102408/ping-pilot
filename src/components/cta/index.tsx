import Link from "next/link"

import { Button } from "../ui/button"

import Container from "../Global/container"
import Particles from "../ui/particles"
import RetroGrid from "../ui/retro-grid"

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <Container>
        <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-[#FAFAFA]/10 rounded-3xl overflow-hidden relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
          <div className="flex flex-col items-center justify-center w-full z-20">
            <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-brand-300 to-[#b5179e] text-transparent bg-clip-text font-heading heading font-semibold !leading-tight mt-6">
              Enhance your <br className="hidden md:block" /> experience with us
              today
            </h2>
            <p className="text-base md:text-lg text-center text-[#4cc9f0] max-w-xl mx-auto mt-6">
              Ready to begin? Register now and start your path to growth. We’re
              committed to helping you achieve your goals.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
              <Button asChild size="lg" className="w-full md:w-max">
                <Link href="">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full md:w-max"
              >
                <Link href="">Learn More</Link>
              </Button>
            </div>
          </div>
          <RetroGrid />
          <Particles
            refresh
            ease={80}
            color="#d4d4d8"
            quantity={100}
            className="size-full absolute inset-0"
          />
        </div>
      </Container>
    </div>
  )
}

export default CTA
