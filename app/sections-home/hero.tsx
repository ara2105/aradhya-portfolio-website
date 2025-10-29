'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { 
  SiPython, SiCplusplus, SiReact, SiNextdotjs, SiTypescript, 
  SiJavascript, SiHtml5, SiCss3, SiTensorflow, SiFigma 
} from 'react-icons/si'

const skills = [
  { name: 'GenAI', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Deep Learning', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'UI/UX', icon: SiFigma, color: '#F24E1E' },
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsVisible(true)
    // Check theme on mount
    setIsDark(document.documentElement.classList.contains('dark'))
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && window.innerWidth >= 1024) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-32 sm:py-24 lg:py-32"
    >
      {/* Animated background - only interactive on desktop */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)`
        }}
      />
      
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-40 h-40 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-float animation-delay-400" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          
          {/* Left Content - Text */}
          <div className={`flex-1 w-full text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-6 sm:mb-6 animate-slide-up text-sm">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up animation-delay-200">
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">Aradhya</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 animate-slide-up animation-delay-400">
              UI/UX Designer & Frontend Developer
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up animation-delay-600 px-2 sm:px-0">
              Hi, I’m Araa — a developer, designer, and (part-time painter), with a curious mind and a love for creating.
              I craft delightful digital experiences by blending <span className="font-semibold text-gray-800 dark:text-gray-200">design thinking, artificial intelligence, and modern frontend development</span>, 
              turning ideas into intuitive, visually engaging interfaces that feel as good as they look. :) 
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-slide-up animation-delay-600 px-2 sm:px-0">
              <a href="#projects" className="btn-primary group text-sm sm:text-base">
                View My Work
                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary group text-sm sm:text-base">
                Let's Talk
                <FiMail className="inline-block ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
              <a
                href="https://github.com/ara2105"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aradhya-goel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:aradhyaparigoel@gmail.com"
                className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/aradhyafrr/profilecard/?igsh=YnFqa2V5Y2F6anA5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Instagram"
                >
                <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className={`flex-1 w-full flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-full max-w-sm sm:max-w-md px-4 sm:px-0">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-400" />
              
              {/* Photo container with gradient border */}
              <div className="relative rounded-3xl overflow-hidden glass p-1 animate-glow">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 p-4 sm:p-8">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 relative">
                    <Image
                      src="/image.png"
                      alt="Aradhya - UI/UX Designer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 glass px-3 sm:px-6 py-2 sm:py-3 rounded-full">
                <p className="text-xs sm:text-sm font-semibold gradient-text whitespace-nowrap">
                  Designer • Developer • Tinkerer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Carousel - No shadow/glow effects */}
        <div className={`w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
   
            {/* Infinite scroll container */}
            <div className="overflow-hidden py-6 sm:py-8">
              <div className="flex animate-scroll-left">
                {/* First set of skills */}
                {skills.map((skill, index) => (
                  <div
                    key={`skill-1-${index}`}
                    className="flex-shrink-0 mx-2 sm:mx-4"
                  >
                    <div className="glass rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2.5 sm:py-4 flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform hover:bg-primary/10 cursor-pointer group border border-transparent">
                      <skill.icon 
                        className="w-5 h-5 sm:w-8 sm:h-8 transition-colors flex-shrink-0" 
                        style={{ color: skill.name === 'Next.js' ? (isDark ? skill.darkColor : skill.color) : skill.color }}
                      />
                      <span className="font-medium text-sm sm:text-lg whitespace-nowrap group-hover:gradient-text transition-all">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {skills.map((skill, index) => (
                  <div
                    key={`skill-2-${index}`}
                    className="flex-shrink-0 mx-2 sm:mx-4"
                  >
                    <div className="glass rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2.5 sm:py-4 flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform hover:bg-primary/10 cursor-pointer group border border-transparent">
                      <skill.icon 
                        className="w-5 h-5 sm:w-8 sm:h-8 transition-colors flex-shrink-0" 
                        style={{ color: skill.name === 'Next.js' ? (isDark ? skill.darkColor : skill.color) : skill.color }}
                      />
                      <span className="font-medium text-sm sm:text-lg whitespace-nowrap group-hover:gradient-text transition-all">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center p-1.5 sm:p-2">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
