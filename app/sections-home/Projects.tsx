'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Cinevault',
    date: 'December 2024',
    description: 'A digital library for movies and TV shows, allowing users to save recommendations, track favorites, and write personal reviews. Built with Next.js 14, it features search, watchlists, reviews, and a sleek, responsive UI.',
    image: '/cinevault.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'TMDB API', 'Clerk Auth', 'Axios', 'Prisma', 'PostgreSQL', 'Cloudinary'],
    liveUrl: 'https://cinevault.actuallyakshat.in/',
  },
  {
    id: 2,
    title: 'Zipit',
    date: 'April 2025',
    description: 'A seamless file-sharing platform built with Next.js 14, Supabase real-time API, and Uploadthing, enabling easy and high-quality file transfers without signups. This project enhanced my skills in real-time functionalities, cron jobs, and software testing.',
    image: '/zipit.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase Realtime', 'Cron Jobs', 'Prisma', 'Uploadthing', 'Zod', 'JSZip'],
    liveUrl: 'https://zipit.actuallyakshat.in/',
  },
  {
    id: 3,
    title: 'Nota Rapida',
    date: 'July 2025',
    description: 'A minimalist, visually appealing note-taking app designed to replace the complexity of Notion, improving daily workflow with simplicity and ease of use. It also features a desktop variant for Windows, built using Electron.js for a native application feel.',
    image: '/nr.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'BlockNoteJS', 'Prisma'],
    liveUrl: 'https://notarapida.actuallyakshat.in/',
  },
  {
    id: 4,
    title: 'Multiplayer Wordle',
    date: 'December 2024 - January 2025',
    description: 'A multiplayer variant of the popular Wordle game by The New York Times. Built with Go, it allows players to compete against each other in real-time, enhancing the gameplay experience and fostering friendly competition.',
    image: '/multiplayerwordle.png',
    tags: ['Go', 'Go Fiber', 'GORM', 'Websockets', 'PostgreSQL', 'React', 'Tailwind CSS', 'Railway'],
    liveUrl: 'https://wordle.actuallyakshat.in/',
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Projects */}
        <div className={`space-y-16 sm:space-y-20 lg:space-y-32 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Mobile & Tablet View - Stacked */}
              <div className="lg:hidden flex flex-col gap-6 sm:gap-8">
                {/* Project Image */}
                <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden glass group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="p-3 rounded-full bg-white/90 hover:bg-white transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink className="w-5 h-5 text-gray-900" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {project.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full glass">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium hover:bg-primary/10 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop View - Overlapping Cards */}
            <div className="hidden lg:block">
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Project Image - Takes ~70% width */}
                <div className={`relative w-[70%] ${index % 2 === 0 ? 'mr-0' : 'ml-0'}`}>
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                        {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            className="p-3 rounded-full bg-white/90 hover:bg-white transition-all"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FiExternalLink className="w-5 h-5 text-gray-900" />
                        </a>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Text Card - Smaller overlap, positioned absolute */}
            <div className={`absolute top-1/2 -translate-y-1/2 w-[35%] ${
                index % 2 === 0 ? 'right-[5%]' : 'left-[5%]'
            }`}>
                <div className="card p-6 backdrop-blur-xl bg-light-card/95 dark:bg-dark-card/95 shadow-2xl">
                <div className="space-y-4">
                    <div>
                    <h3 className="text-xl xl:text-2xl font-bold mb-2">
                        {project.title}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2.5 py-1 rounded-full glass inline-block mb-3">
                        {project.date}
                    </span>
                    <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                    </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full glass text-xs font-medium hover:bg-primary/10 transition-all"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>

                    {/* Button */}
                    <div className="flex gap-3 pt-1">
                    {project.liveUrl && (
                        <a
                        href={project.liveUrl}
                        className="btn-primary text-xs inline-flex items-center gap-2 px-4 py-2"
                        >
                        <FiExternalLink className="w-3 h-3" />
                        Visit
                        </a>
                    )}
                    </div>
                </div>
                </div>
            </div>
            </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
