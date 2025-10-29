'use client'

import { useState, useEffect } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiSend } from 'react-icons/fi'

export default function Contact() {
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

    const section = document.getElementById('contact')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email me',
      value: 'aradhyaparigoel@gmail.com',
      href: 'mailto:aradhyaparigoel@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiPhone,
      title: 'Call me',
      value: '+91 9711509837',
      href: 'tel:+919711509837',
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/ara2105',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/aradhya-goel/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: FiInstagram,
      href: 'https://www.instagram.com/aradhyafrr/profilecard/?igsh=YnFqa2V5Y2F6anA5',
      color: 'hover:text-pink-600',
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:aradhyaparigoel@gmail.com',
      color: 'hover:text-purple-600',
    },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods - Main CTAs */}
          <div className={`grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                className="group card hover:scale-[1.02] transition-all duration-300 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                      {method.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 truncate">
                      {method.value}
                    </p>
                  </div>
                  <FiSend className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
                Connect on Social
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-primary/5 transition-all ${social.color}`}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-sm sm:text-base font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Message */}
          <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-block glass rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 border-l-4 border-primary">
              <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 dark:text-gray-200">
                Available for <span className="gradient-text font-bold">freelance opportunities</span> and exciting projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
