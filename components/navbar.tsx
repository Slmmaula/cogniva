"use client"

import { useCallback, useEffect, useState } from "react"
import { MobileNav } from "./mobile-nav"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const router = useRouter()

  // function to handle scrolling to sections
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      setActiveSection(sectionId)

      const headerOffset = 80 // Adjust based on your header height
      const sectionPosition = section.getBoundingClientRect().top
      const offsetPosition = sectionPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update URL without hash
      window.history.pushState({}, "", `/${sectionId === "home" ? "" : sectionId}`)
    }
  }, [])

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observerOptions = {
      rootMargin: "-100px 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          // Update URL without hash when scrolling
          window.history.replaceState({}, "", `/${entry.target.id === "home" ? "" : entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    // Set home as active by default when page loads
    if (window.scrollY < 100) {
      setActiveSection("home")
    }

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "expertise", label: "Expertise" },
    { id: "success-stories", label: "Success Stories" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
            Cogniva Creative
          </span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-purple-600 font-semibold" : "hover:text-purple-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium"
          >
            Get in Touch
          </button>
          <MobileNav navItems={navItems} activeSection={activeSection} onNavItemClick={scrollToSection} />
        </div>
      </div>
    </header>
  )
}

