'use client'

import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(savedTheme)
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    // Force theme change on HTML element
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(newTheme)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'w-[95%] max-w-5xl' : 'w-[95%] max-w-6xl'
        }`}
      >
        <div className="glass rounded-full px-6 py-4 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              AG
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-indigo-600" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] glass rounded-3xl p-6 shadow-2xl animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-medium hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
