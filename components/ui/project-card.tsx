"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  index: number
  item?: {
    id: number
    title: string
    description: string
    image: string
    link: string
  }
}

export function ProjectCard({ index, item }: ProjectCardProps) {
  // Default project data if item is not provided
  const projectId = item?.id || index
  const projectTitle = item?.title || `Project ${index}`
  const projectDescription = item?.description || "A sample project description showcasing our work and expertise."
  const projectImage = item?.image || "/placeholder.svg"

  return (
    <Link href={`/work/${projectId}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className="aspect-video bg-[#e5e5e5] relative overflow-hidden border border-gray-800">
          <Image
            src={projectImage}
            alt={projectTitle}
            fill
            className=" transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-2xl font-medium">{projectTitle}</h3>
        <p className="mt-2 text-lg text-[#666]">{projectDescription}</p>
      </motion.div>
    </Link>
  )
}
