"use client"

import { useState, useEffect } from "react"
import { Menu, X, Truck } from "lucide-react"
import { useNavbar } from "@/hooks/use-sanity"

// Default data (fallback)
const defaultNavLinks = [
  { label: "Услуги", section: "services" },
  { label: "Цены", section: "pricing" },
  { label: "Как работаем", section: "how" },
  { label: "Зона работы", section: "zone" },
  { label: "Контакты", section: "contacts" },
]

const defaultData = {
  logoText: "Эвак",
  logoHighlight: "СПб",
  orderButtonText: "Заказать",
  orderButtonUrl: "https://t.me/your_bot",
  links: defaultNavLinks,
}

// Convert section ID to href
const sectionToHref = (section: string) => `#${section}`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { data } = useNavbar()

  const navbar = data || defaultData
  const navLinks = navbar.links || defaultNavLinks

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Truck className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-mono font-bold text-foreground tracking-tight text-lg">
            {navbar.logoText}<span className="text-primary">{navbar.logoHighlight}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.section}
              href={sectionToHref(l.section)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={navbar.orderButtonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          {navbar.orderButtonText}
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.section}
              href={sectionToHref(l.section)}
              onClick={() => setOpen(false)}
              className="text-foreground text-base py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={navbar.orderButtonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold"
          >
            Заказать в Telegram
          </a>
        </div>
      )}
    </header>
  )
}
