'use client'

import { useState, useEffect } from 'react'
import { FiCode, FiLayers, FiCpu, FiZap, FiHeart, FiTrendingUp, FiAward, FiTarget, FiStar } from 'react-icons/fi'
import Image from 'next/image'

const passions = [
  { icon: FiZap, text: 'Turning ideas into impactful digital experiences' },
  { icon: FiHeart, text: 'Blending creativity with cutting-edge technology' },
  { icon: FiTrendingUp, text: 'Pushing boundaries through continuous learning' },
]

const achievements = [
  { icon: FiAward, label: 'Excellence', value: 'Design & Code' },
  { icon: FiTarget, label: 'Focus', value: 'AI Innovation' },
  { icon: FiStar, label: 'Passion', value: 'Problem Solving' },
]

export default function About() {
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

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Thoda UI, Thoda Magic
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
          
          {/* Left - Story */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="card h-full">
              <div className="mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center mb-4 sm:mb-6">
                  <FiHeart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">My Journey</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Designing and creating have been my thing since I was <span className="font-semibold text-gray-800 dark:text-gray-200">4</span> — my room’s still packed with paintings, clay models, and half-finished canvases. 
                  By the time I hit college, I realized (thanks to my parents and a few cheerleader friends) that I could actually <span className="font-semibold text-gray-800 dark:text-gray-200">get paid to do what I love</span>. 
                  That’s when I stumbled into freelancing and when I landed my first gig, I bragged to literally everyone. I delivered, got hooked, and never looked back.
                </p>

                <p>
                  Soon after, I teamed up with a bunch of like-minded students, and we started taking on full-fledged projects offering <span className="font-semibold text-gray-800 dark:text-gray-200">design and digital marketing services</span>. 
                  It was chaotic, creative, and ridiculously fun.
                </p>

                <p>
                  Designing will always be my passion <span className="font-semibold text-gray-800 dark:text-gray-200">the colors, the layouts, the little details that make something come alive</span>. 
                  It’s what keeps me grounded and inspired, no matter how technical things get.
                </p>


                <div className="pt-4 sm:pt-6">
                 <a 
                    href="https://drive.google.com/file/d/1WeSuEIPDky1NF9UzlfvLqvo2H_T4co7r/view" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block text-sm sm:text-base"
                    >
                    Download Resume
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Achievement Cards */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4 sm:space-y-6 h-full flex flex-col">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="card flex-1 flex items-center gap-4 sm:gap-6 group hover:scale-[1.02] transition-all"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text">{item.value}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-14">
            Work <span className="gradient-text">Experience</span>
          </h3>

          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
            {/* Experience 1 - Rakuten */}
            <div className="card group hover:scale-[1.02] transition-all">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Timeline Indicator with Logo */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl">
                    <Image
                    src="/rakuten.png"
                    alt="Rakuten"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-1"
                    />
                </div>
                <div className="hidden sm:block w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                </div>

                {/* Content */}
                <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Software Development Intern
                    </h4>
                    <p className="text-base sm:text-lg font-semibold gradient-text">
                        Rakuten India Enterprise Private Limited
                    </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">
                    <div className="px-3 py-1 rounded-full glass">
                        Sept 2025 - Current
                    </div>
                    </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Developing high-availability e-commerce modules by building scalable microservices and interactive frontend components in{' '}
                <span className="font-semibold text-gray-800 dark:text-gray-200">Java, Spring Boot, and React</span>, 
                following robust SDLC and modern frontend development practices.
              </p>


                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                    Java
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                    Spring Boot
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                    Microservices
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                      Frontend Development
                    </span>
                </div>
                </div>
            </div>
            </div>

            {/* Experience 2 - A.K.A */}
            <div className="card group hover:scale-[1.02] transition-all">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Timeline Indicator */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FiLayers className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                        UI/UX Designer & Frontend Developer
                      </h4>
                      <p className="text-base sm:text-lg font-semibold gradient-text">
                        A.K.A
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">
                      <div className="px-3 py-1 rounded-full glass">
                        Apr 2024 - Aug 2025
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      Worked as a freelance UI/UX designer and Frontend developer amongst a team of three to design, develop, and launch websites.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <FiTarget className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>
                          Successfully designed and launched a website for{' '}
                          <span className="font-semibold text-gray-800 dark:text-gray-200">MagicMedia</span>, 
                          a digital marketing agency, leading to a{' '}
                          <span className="font-semibold text-gray-800 dark:text-gray-200">20% increase in lead generation</span>.
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <FiTarget className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>
                          Developed a visually appealing and user-intuitive website for{' '}
                          <span className="font-semibold text-gray-800 dark:text-gray-200">Editors Atelier</span>, 
                          a book publishing platform, which streamlined the author submission process and improved reader discoverability.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      Figma
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      Adobe Photoshop
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      Frontend Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Passions */}
        <div className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
              What Drives <span className="gradient-text">Me</span>
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-primary/5 transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <passion.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {passion.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-3xl mx-auto border-l-4 border-primary">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed">
              "Started with a sketchbook, now I design and code my way through the world, same creativity, just a bigger canvas."
            </p> 
            <p className="mt-4 sm:mt-6 text-sm sm:text-base gradient-text font-semibold">
              — TLDR, in a nutshell
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
