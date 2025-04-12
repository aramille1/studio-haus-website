"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  index: number
}

export function ProjectCard({ index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="aspect-video bg-[#e5e5e5] relative overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt={`Project ${index}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-2xl font-light">Project {index}</h3>
      <p className="mt-2 text-lg text-[#666]">Brand Campaign</p>
    </motion.div>
  )
}
