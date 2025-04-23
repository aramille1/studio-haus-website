"use client"

import { motion } from "framer-motion"
import { Code, Globe, Lightbulb, Search, Palette } from "lucide-react"
import { ServiceCard } from "./ui/service-card"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-serif italic mb-16">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ServiceCard
            title="Branding"
            description="We craft memorable brand identities that resonate with your audience. From logo design to brand guidelines, we help you stand out in a crowded market."
            icon={<Lightbulb className="w-8 h-8" />}
            delay={0.1}
          />
          <ServiceCard
            title="Web Design"
            description="Our design team creates beautiful, responsive websites that deliver exceptional user experiences. We focus on clean aesthetics and intuitive navigation."
            icon={<Palette className="w-8 h-8" />}
            delay={0.2}
          />
          <ServiceCard
            title="Web Development"
            description="We build robust, scalable websites and web applications using the latest technologies. From simple landing pages to complex e-commerce solutions."
            icon={<Code className="w-8 h-8" />}
            delay={0.3}
          />
          <ServiceCard
            title="SEO"
            description="Boost your online visibility with our comprehensive SEO strategies. We improve your search engine rankings and drive targeted organic traffic to your website."
            icon={<Search className="w-8 h-8" />}
            delay={0.4}
          />
        </div>
      </motion.div>
    </section>
  )
}
