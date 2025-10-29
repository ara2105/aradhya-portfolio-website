'use client'

import { useState, useEffect } from 'react'
import { 
  SiPython, SiCplusplus, SiReact, SiNextdotjs, SiTypescript, 
  SiJavascript, SiHtml5, SiCss3, SiTensorflow, SiFigma,
  SiAdobephotoshop, SiTailwindcss, SiFirebase, SiGit
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Design',
    skills: [
      { name: 'UI/UX Design', icon: SiFigma, level: 95 },
      { name: 'Figma', icon: SiFigma, level: 90 },
      { name: 'Adobe Photoshop', icon: SiAdobephotoshop, level: 85 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 88 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'HTML', icon: SiHtml5, level: 95 },
      { name: 'CSS', icon: SiCss3, level: 93 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'GenAI', icon: SiTensorflow, level: 80 },
      { name: 'Deep Learning', icon: SiTensorflow, level: 75 },
      { name: 'Python', icon: SiPython, level: 88 },
      { name: 'C++', icon: SiCplusplus, level: 82 },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Firebase', icon: SiFirebase, level: 85 },
      { name: 'Git', icon: SiGit, level: 90 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
    
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) sectionObserver.observe(section)

    return () => {
      observer.disconnect()
      if (section) sectionObserver.unobserve(section)
    }
  }, [])

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gray-50 dark:bg-dark-card/30">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card group hover:scale-[1.02] transition-all duration-300`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br ${category.color}`} />
                <h3 className="text-xl sm:text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4 sm:space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group/skill">
                    {/* Skill Name & Icon */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <skill.icon 
                          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/skill:scale-110" 
                          style={{ 
                            color: skill.name === 'Next.js' 
                              ? (isDark ? '#FFFFFF' : '#000000') 
                              : undefined 
                          }}
                        />
                        <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 sm:h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 100 + index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Stats */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">10+</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Technologies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">5+</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Learning</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">15+</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Built</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">∞</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Ideas to Create</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
