"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ProjectEntry } from "@/lib/contentful-types"

interface ProjectCardProps {
  index: number
  project?: ProjectEntry
}

export function ProjectCard({ index, project }: ProjectCardProps) {
  // If we have a project from Contentful, use that data, otherwise fall back to placeholder
  const title = project?.fields?.title || `Project ${index}`;
  const category = project?.fields?.category || "Brand Campaign";
  const slug = project?.fields?.slug;
  const imageUrl = project?.fields?.coverImage?.fields?.file?.url
    ? `https:${project.fields.coverImage.fields.file.url}`
    : "/placeholder.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link href={slug ? `/work/${slug}` : "#"}>
        <div className="aspect-video bg-[#e5e5e5] relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-2xl font-light">{title}</h3>
        <p className="mt-2 text-lg text-[#666]">{category}</p>
      </Link>
    </motion.div>
  )
}
