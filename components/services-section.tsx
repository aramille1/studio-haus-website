"use client"

import { motion } from "framer-motion"
import { BarChart2, Eye, Globe, Heart, Wrench } from "lucide-react"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            title="Brand Strategy"
            description="We help you find your unique voice and position in the market."
            icon={<Eye className="w-8 h-8" />}
            delay={0.1}
          />
          <ServiceCard
            title="Creative Platform"
            description="We develop multi-year platforms that build lasting connections."
            icon={<Heart className="w-8 h-8" />}
            delay={0.2}
          />
          <ServiceCard
            title="Content Creation"
            description="We produce content that brings your brand story to life."
            icon={<Globe className="w-8 h-8" />}
            delay={0.3}
          />
          <ServiceCard
            title="Campaign Development"
            description="We create integrated campaigns that drive results."
            icon={<BarChart2 className="w-8 h-8" />}
            delay={0.4}
          />
          <ServiceCard
            title="Digital Experience"
            description="We design digital touchpoints that enhance your brand."
            icon={<Wrench className="w-8 h-8" />}
            delay={0.5}
          />
          <ServiceCard
            title="Brand Measurement"
            description="We help you track and optimize your brand performance."
            icon={<BarChart2 className="w-8 h-8" />}
            delay={0.6}
          />
        </div>
      </motion.div>
    </section>
  )
}
