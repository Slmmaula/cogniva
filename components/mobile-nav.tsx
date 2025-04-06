"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  navItems: { id: string; label: string }[]
  activeSection: string
  onNavItemClick: (sectionId: string) => void
}

export function MobileNav({ navItems, activeSection, onNavItemClick }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const handleNavItemClick = (sectionId: string) => {
    onNavItemClick(sectionId)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="font-semibold text-lg">Menu</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`text-lg py-2 text-left border-b border-gray-100 ${
                  activeSection === item.id ? "text-purple-600 font-semibold" : "hover:text-purple-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => handleNavItemClick("contact")}>
              Get in Touch
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}