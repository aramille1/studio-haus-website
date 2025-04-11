"use client"

import { motion } from "framer-motion"
import type React from "react"

interface IconWrapperProps {
  icon: React.ReactNode
  delay: number
}

export function IconWrapper({ icon, delay }: IconWrapperProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, display: "inline-block" }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      className="inline-flex align-middle mx-1"
    >
      {icon}
    </motion.span>
  )
}
