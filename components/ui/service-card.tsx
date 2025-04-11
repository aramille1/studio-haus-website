"use client"

import { motion } from "framer-motion"
import type React from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay: number
}

export function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-8 bg-[#f8f8f8] hover:bg-[#f2f2f2] transition-colors"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-lg text-[#666]">{description}</p>
    </motion.div>
  )
}
