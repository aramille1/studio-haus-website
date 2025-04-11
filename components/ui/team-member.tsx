"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMemberProps {
  index: number
}

export function TeamMember({ index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="aspect-square bg-[#e5e5e5] relative overflow-hidden">
        <Image src="/placeholder.svg" alt={`Team Member ${index}`} fill className="object-cover" />
      </div>
      <h4 className="mt-4 text-xl font-medium">Name Surname</h4>
      <p className="mt-1 text-lg text-[#666]">Position</p>
    </motion.div>
  )
}
