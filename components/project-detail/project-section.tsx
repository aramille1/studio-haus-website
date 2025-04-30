"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { getProjectById, Project } from "@/lib/projects"
import { useEffect, useState } from "react"

interface ProjectSectionProps {
  slug: string
}

export function ProjectSection({ slug }: ProjectSectionProps) {
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    // Get project data based on slug
    const projectData = getProjectById(slug)
    if (projectData) {
      setProject(projectData)
    }
  }, [slug])

  // Define technology icons based on project title
  const getTechnologies = (title: string) => {
    if (title.toLowerCase().includes('angular')) {
      return [
        { name: 'Figma', icon: '/icons/figma.svg' },
        { name: 'Angular', icon: '/icons/angular.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'Go lang', icon: '/icons/golang.svg' }
      ];
    } else if (title.toLowerCase().includes('bootcamp')) {
      return [
        { name: 'Figma', icon: '/icons/figma.svg' },
        { name: 'Next.js', icon: '/icons/nextjs.svg' },
        { name: 'Vercel', icon: '/icons/vercel.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'SEO', icon: '/icons/seo.svg' }
      ];
    }
    return [];
  };

  if (!project) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl">Loading project details...</p>
      </div>
    )
  }

  const technologies = getTechnologies(project.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl font-serif italic mb-16">{project.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          {/* <p className="text-xl md:text-2xl leading-relaxed font-light">
            {project.description}
          </p> */}

          <div className="grid gap-4">
            {/* <div>
              <h3 className="text-lg font-medium">Client</h3>
              <p className="text-xl">{project.client || "Brand Name"}</p>
            </div> */}

            <div>
              <h3 className="text-lg font-medium">Services</h3>
              <p className="text-xl">{project.services?.join(", ") || "Brand Strategy, Creative Platform, Content Creation"}</p>
            </div>

            <div>
              {project.link && <h3 className="text-lg font-medium">Link</h3>}
              {project.link && <p className="text-xl hover:underline"><a href={project.link} target="_blank">{project.link}</a></p>}
            </div>

            {technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mt-4">Technologies</h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <span className="text-sm text-gray-600">{tech.name}</span>
                      <div className="w-12 h-12 relative mb-1">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="aspect-video bg-[#e5e5e5] relative overflow-hidden"
        >
          <Image src={project.image || "/placeholder.svg"} alt={`${project.title} hero`} fill className="border border-black" />
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
              {project.challenge ||
                "Our client needed to stand out in a crowded market where consumers were bombarded with fleeting content and short-lived campaigns. They needed a consistent brand platform that would create lasting emotional connections with their audience."}
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

            <div className="aspect-video bg-[#e5e5e5] relative overflow-hidden">
              <Image src={project.gallery?.[1] || "/placeholder.svg"} alt="Our approach" fill className="border border-black" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">Our Approach</h2>
              <p className="text-xl leading-relaxed">
                {project.approach ||
                  "We developed a multi-year platform that focused on the core values of the brand and created emotional resonance with the target audience. This approach allowed for consistent messaging across all touchpoints while providing flexibility for seasonal campaigns."}
              </p>
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
            {/* <h2 className="text-3xl md:text-4xl font-light mb-8">The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {project.results?.stats ? (
                project.results.stats.map((stat, index) => (
                  <div key={index} className="p-8 bg-[#f2f2f2]">
                    <h3 className="text-5xl font-light mb-4">{stat.value}</h3>
                    <p className="text-xl">{stat.label}</p>
                  </div>
                ))
              ) : (
                <>
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
                </>
              )}
            </div> */}
            <p className="text-xl leading-relaxed">
              {project.results?.summary ||
                "The campaign exceeded all expectations, creating a lasting impact on the brand's market position and customer loyalty. The platform continues to provide a foundation for ongoing marketing efforts."}
            </p>
          </motion.div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="aspect-video bg-[#e5e5e5] relative overflow-hidden"
        >
          <Image src={project.gallery?.[0] || "/placeholder.svg"} alt={`${project.title} gallery 1`} fill className="border" />
        </motion.div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-square bg-[#e5e5e5] relative overflow-hidden"
          >
            <Image src={project.gallery?.[2] || "/placeholder.svg"} alt={`${project.title} gallery 2`} fill className="border" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="aspect-square bg-[#e5e5e5] relative overflow-hidden"
          >
            <Image src={project.gallery?.[3] || "/placeholder.svg"} alt={`${project.title} gallery 3`} fill className="border" />
          </motion.div>
        </div> */}
      </div>
    </motion.div>
  )
}
