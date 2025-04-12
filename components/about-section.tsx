"use client"

import { memo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { getTeamMembers } from "@/lib/contentful"
import { TeamMemberEntry } from "@/lib/contentful-types"

// Animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const AboutSection = memo(function AboutSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMemberEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const members = await getTeamMembers();
        setTeamMembers(members as TeamMemberEntry[]);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-serif italic mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <div>
          <div>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed font-light"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Studio Haus is an independent creative agency based in Berlin. We craft digital experiences that
              transform ideas into impactful realities, helping brands establish meaningful connections in the digital landscape.
            </motion.p>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed font-light mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Through thoughtful design and innovative development, we build websites and digital platforms that don't just
              meet business objectives—they exceed them, creating memorable journeys that resonate with audiences and drive results.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-light mb-12"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Talents Behind Studio Haus
          </motion.h3>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[1, 2].map((index) => (
                <div key={index} className="flex flex-row items-center gap-6 animate-pulse">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-300 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-6 bg-gray-300 rounded w-2/5 mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-3" />
                    <div className="h-4 bg-gray-300 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.sys.id}
                  className="flex flex-row items-center gap-6"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-[#e5e5e5] relative overflow-hidden rounded-full flex-shrink-0">
                    <Image
                      src={member.fields.photo?.fields?.file?.url ? `https:${member.fields.photo.fields.file.url}` : "/placeholder-user.jpg"}
                      alt={`${member.fields.name} - ${member.fields.position}`}
                      width={112}
                      height={112}
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 112px"
                      priority={index < 2}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-medium">{member.fields.name}</h4>
                    <p className="text-lg md:text-xl text-[#666]">{member.fields.position}</p>
                    <p className="mt-2 text-base md:text-lg font-light">{member.fields.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Fallback content if no team members are loaded from Contentful
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                className="flex flex-row items-center gap-6"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-[#e5e5e5] relative overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Sonja - UX/UI Designer"
                    width={112}
                    height={112}
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 112px"
                    priority
                  />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-medium">Sonja</h4>
                  <p className="text-lg md:text-xl text-[#666]">UX/UI Designer</p>
                  <p className="mt-2 text-base md:text-lg font-light">Crafting intuitive and beautiful user experiences that bridge aesthetics with functionality.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-row items-center gap-6"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-[#e5e5e5] relative overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Ramil - Web Developer"
                    width={112}
                    height={112}
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 112px"
                  />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-medium">Ramil</h4>
                  <p className="text-lg md:text-xl text-[#666]">Web Developer</p>
                  <p className="mt-2 text-base md:text-lg font-light">Bringing designs to life through clean code and cutting-edge web technologies.</p>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
})
