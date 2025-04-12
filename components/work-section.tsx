"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ProjectCard } from "./ui/project-card"

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-serif italic mb-16">Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((item) => (
            <ProjectCard key={item} index={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/work" className="inline-flex items-center text-xl hover:opacity-60 transition-opacity">
            View all work <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
