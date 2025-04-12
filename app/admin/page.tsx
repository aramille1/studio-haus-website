"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getProjects, getTeamMembers, getServices } from '@/lib/contentful'
import { ProjectEntry, TeamMemberEntry, ServiceEntry } from '@/lib/contentful-types'

export default function AdminPage() {
  const [projects, setProjects] = useState<ProjectEntry[]>([])
  const [teamMembers, setTeamMembers] = useState<TeamMemberEntry[]>([])
  const [services, setServices] = useState<ServiceEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [contentfulUrl, setContentfulUrl] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, teamData, servicesData] = await Promise.all([
          getProjects(),
          getTeamMembers(),
          getServices()
        ])

        setProjects(projectsData as ProjectEntry[])
        setTeamMembers(teamData as TeamMemberEntry[])
        setServices(servicesData as ServiceEntry[])

        // Set Contentful URL
        setContentfulUrl(`https://app.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/home`)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const openPreview = (type: string, slug?: string) => {
    const secret = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET
    const url = `/api/preview?secret=${secret}&type=${type}${slug ? `&slug=${slug}` : ''}`
    window.open(url, '_blank')
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Content Management</h1>

      <div className="mb-6">
        <a
          href={contentfulUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Open Contentful Dashboard
        </a>
      </div>

      {loading ? (
        <div className="animate-pulse p-4 bg-gray-100 rounded">Loading content...</div>
      ) : (
        <div className="grid gap-8">
          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Projects ({projects.length})</h2>
            <ul className="divide-y">
              {projects.map(project => (
                <li key={project.sys.id} className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-medium">{project.fields.title}</span>
                    <span className="ml-2 text-gray-500">{project.fields.category}</span>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => openPreview('project', project.fields.slug)}
                      className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
                    >
                      Preview
                    </button>
                    <Link
                      href={`/work/${project.fields.slug}`}
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
                    >
                      View
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Team Members ({teamMembers.length})</h2>
            <ul className="divide-y">
              {teamMembers.map(member => (
                <li key={member.sys.id} className="py-3">
                  <span className="font-medium">{member.fields.name}</span>
                  <span className="ml-2 text-gray-500">{member.fields.position}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Services ({services.length})</h2>
            <ul className="divide-y">
              {services.map(service => (
                <li key={service.sys.id} className="py-3">
                  <span className="font-medium">{service.fields.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
