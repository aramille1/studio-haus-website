"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectSectionProps {
  slug: string
}

export function ProjectSection({ slug }: ProjectSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl font-serif italic mb-8">Project {slug}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-xl md:text-2xl leading-relaxed font-light">
            A comprehensive brand campaign that redefined the client's market position and created lasting customer
            connections.
          </p>

          <div className="mt-12 grid gap-4">
            <div>
              <h3 className="text-lg font-medium">Client</h3>
              <p className="text-xl">Brand Name</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Services</h3>
              <p className="text-xl">Brand Strategy, Creative Platform, Content Creation</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Year</h3>
              <p className="text-xl">2023</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="aspect-video bg-[#e5e5e5] relative overflow-hidden"
        >
          <Image src="/placeholder.svg" alt={`Project ${slug} hero`} fill className="object-cover" />
        </motion.div>
      </div>

      <div className="grid gap-24 mb-24">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">The Challenge</h2>
            <p className="text-xl leading-relaxed">
              Our client needed to stand out in a crowded market where consumers were bombarded with fleeting content
              and short-lived campaigns. They needed a consistent brand platform that would create lasting emotional
              connections with their audience.
            </p>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">Our Approach</h2>
              <p className="text-xl leading-relaxed">
                We developed a multi-year platform that focused on the core values of the brand and created emotional
                resonance with the target audience. This approach allowed for consistent messaging across all
                touchpoints while providing flexibility for seasonal campaigns.
              </p>
            </div>

            <div className="aspect-video bg-[#e5e5e5] relative overflow-hidden">
              <Image src="/placeholder.svg" alt="Our approach" fill className="object-cover" />
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 bg-[#f2f2f2]">
                <h3 className="text-5xl font-light mb-4">+42%</h3>
                <p className="text-xl">Increase in brand awareness</p>
              </div>
              <div className="p-8 bg-[#f2f2f2]">
                <h3 className="text-5xl font-light mb-4">+63%</h3>
                <p className="text-xl">Increase in customer engagement</p>
              </div>
              <div className="p-8 bg-[#f2f2f2]">
                <h3 className="text-5xl font-light mb-4">+28%</h3>
                <p className="text-xl">Increase in sales conversion</p>
              </div>
            </div>
            <p className="text-xl leading-relaxed">
              The campaign exceeded all expectations, creating a lasting impact on the brand's market position and
              customer loyalty. The platform continues to provide a foundation for ongoing marketing efforts.
            </p>
          </motion.div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="aspect-video bg-[#e5e5e5] relative overflow-hidden"
        >
          <Image src="/placeholder.svg" alt="Project gallery 1" fill className="object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-square bg-[#e5e5e5] relative overflow-hidden"
          >
            <Image src="/placeholder.svg" alt="Project gallery 2" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="aspect-square bg-[#e5e5e5] relative overflow-hidden"
          >
            <Image src="/placeholder.svg" alt="Project gallery 3" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
