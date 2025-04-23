"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { House, ChevronDown, Laptop, RefreshCw, Trash2, Wrench, Sparkles, BicepsFlexed } from "lucide-react"
import { useRef } from "react"
import { IconWrapper } from "./ui/icon-wrapper"
import Link from "next/link"

interface HeroSectionProps {
  loaded: boolean
}

export function HeroSection({ loaded }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.95])

  // Animation variants for the border lines
  const topLineVariants = {
    hidden: { scaleX: 0, opacity: 0, originX: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 3.0
      }
    }
  };

  const rightLineVariants = {
    hidden: { scaleY: 0, opacity: 0, originY: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 3.4
      }
    }
  };

  const bottomLineVariants = {
    hidden: { scaleX: 0, opacity: 0, originX: 1 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 3.8
      }
    }
  };

  const leftLineVariants = {
    hidden: { scaleY: 0, opacity: 0, originY: 1 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 4.2
      }
    }
  };

  return (
    <motion.div
      ref={heroRef}
      style={{ opacity, scale }}
      className="flex min-h-screen flex-col items-center justify-center p-4 md:p-44 pt-28"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="text-3xl md:text-4xl lg:text-5xl leading-normal font-light"
          style={{ lineHeight: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Like your dream house <IconWrapper icon={<House className="w-10 h-10 md:w-12 md:h-12 mb-2 mx-2" />} delay={1.2} />
          your website should be functional <IconWrapper icon={<Wrench className="w-10 h-10 md:w-12 md:h-12 mb-2 mx-2" />} delay={1.6} />
          well constructed, and look stunning <IconWrapper icon={<Sparkles className="w-10 h-10 md:w-12 md:h-12 mb-2 mx-2" />} delay={2.0} />
          We design and build digital homes that do it all.

          Ready to move online? We’ll handle the heavy lifting<IconWrapper icon={<BicepsFlexed className="w-10 h-10 md:w-12 md:h-12 mb-2 mx-2" />} delay={2.4} />

          {/* <IconWrapper icon={<Building2 className="w-10 h-10 md:w-12 md:h-12" />} delay={1.2} />, everything moves
          fast. One site here, another gone{" "}
          <IconWrapper icon={<Trash2 className="w-10 h-10 md:w-12 md:h-12" />} delay={1.6} />. Designs fade. Code
          breaks. Users bounce. But not yours. We build websites{" "}
          <IconWrapper icon={<Laptop className="w-10 h-10 md:w-12 md:h-12" />} delay={2.0} /> that last — clear,
          human, and made for real people. No fluff, just tools{" "}
          <IconWrapper icon={<Wrench className="w-10 h-10 md:w-12 md:h-12" />} delay={2.4} /> that make it easier
          for your clients to stay, click, and come back. <br /> */}
<br />
          <motion.div
            className="relative inline-block mt-4 px-8 py-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 3.0 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Top line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[1px] bg-current"
              variants={topLineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Right line */}
            <motion.div
              className="absolute top-0 right-0 w-[1px] h-full bg-current"
              variants={rightLineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Bottom line */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[1px] bg-current"
              variants={bottomLineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Left line */}
          <motion.div
              className="absolute top-0 left-0 w-[1px] h-full bg-current "
              variants={leftLineVariants}
              initial="hidden"
              animate="visible"
            />
              <Link href="#contact" className="hover:opacity-60 transition-opacity">
                  <span className="">Let's do it!</span>
              </Link>
          </motion.div>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 4.0 }}
        className="mt-16"
      >
        <ChevronDown className="w-10 h-10 animate-bounce" />
      </motion.div>
    </motion.div>
  )
}
