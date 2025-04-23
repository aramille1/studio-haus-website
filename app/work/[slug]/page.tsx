"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MobileMenu } from "@/components/mobile-menu"
import { ProjectSection } from "@/components/project-detail/project-section"
import { getAllProjects, getProjectById } from "@/lib/projects"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect, use } from "react"

// The project detail page component
export default function ProjectDetailPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [nextProjectId, setNextProjectId] = useState<number | null>(null)

  // Properly unwrap params with React.use() as recommended by Next.js
  const unwrappedParams = 'then' in params ? use(params) : params;
  const { slug } = unwrappedParams;

  useEffect(() => {
    const allProjects = getAllProjects();
    const currentProjectId = parseInt(slug, 10);

    // Find the next project
    const currentIndex = allProjects.findIndex(p => p.id === currentProjectId);
    if (currentIndex !== -1 && currentIndex < allProjects.length - 1) {
      setNextProjectId(allProjects[currentIndex + 1].id);
    } else if (allProjects.length > 0) {
      // If this is the last project, loop back to the first one
      setNextProjectId(allProjects[0].id);
    }
  }, [slug]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#333333]">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div className="px-6 md:px-12 lg:px-24 py-12 pt-32">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/#work" className="inline-flex items-center text-xl hover:opacity-60 transition-opacity mb-12">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to work
          </Link>
        </motion.div>

        <ProjectSection slug={slug} />

        {nextProjectId !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">Next Project</h2>
            <Link
              href={`/work/${nextProjectId}`}
              className="inline-flex items-center text-xl hover:opacity-60 transition-opacity"
            >
              View next project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  )
}
