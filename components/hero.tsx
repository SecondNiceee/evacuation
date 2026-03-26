"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Clock } from "lucide-react"
import { useHero, useSiteSettings } from "@/hooks/use-sanity"
import { urlFor } from "@/lib/sanity"
import { getIcon } from "@/lib/icon-map"
import { HighlightText } from "@/components/highlight-text"

// Default data (fallback) - used for non-SEO-critical elements only
const defaultBadges = [
  { icon: "Часы", text: "Подача от 20 минут (24/7)" },
  { icon: "Метка на карте", text: "Работаем по всему СПб" },
  { icon: "Робот", text: "Заказ в Telegram-боте" },
]

const defaultSocialLinks = {
  telegramUrl: "https://t.me/your_bot",
  vkUrl: "https://vk.com/your_group",
  maxUrl: "https://max.ru/your_group",
  phoneNumber: "+7-921-431-2020",
}

export function Hero() {
  const { data: hero } = useHero()
  const { data: settings } = useSiteSettings()
  const [isRevealed, setIsRevealed] = useState(false)
  
  // Reveal animation when hero data is loaded
  useEffect(() => {
    if (hero) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => setIsRevealed(true), 50)
      return () => clearTimeout(timer)
    }
  }, [hero])
  
  const socialLinks = settings?.socialLinks || defaultSocialLinks
  const badges = hero?.badges || defaultBadges

  const heroImageUrl = hero?.heroImage ? urlFor(hero.heroImage).url() : "/images/hero-tow.jpg"

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark overlay that fades out when content loads */}
      <div 
        className={`absolute inset-0 z-50 bg-background pointer-events-none transition-opacity duration-700 ease-out ${
          isRevealed ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Background image */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-out ${
        isRevealed ? 'opacity-100' : 'opacity-0'
      }`}>
        <Image
          src={heroImageUrl}
          alt="Эвакуатор в Санкт-Петербурге ночью"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        {/* Neon glow accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Tag - only render when data is loaded */}
          {hero?.tagText && (
            <div className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 transition-all duration-700 delay-100 ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {hero.tagText}
            </div>
          )}

          {/* H1 - only render when data is loaded (no fallback for SEO) */}
          {hero?.title && (
            <h1 className={`font-mono font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance mb-6 transition-all duration-700 delay-200 ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <HighlightText
                text={hero.title}
                highlights={[
                  { word: hero.titleHighlight1, color: "hsl(var(--primary))" },
                  { word: hero.titleHighlight2, color: "oklch(0.78 0.18 70)" },
                ]}
              />
            </h1>
          )}

          {/* Subtitle - only render when data is loaded */}
          {hero?.subtitle && (
            <p className={`text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl text-pretty transition-all duration-700 delay-300 ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {hero.subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-400 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <a
              href={socialLinks.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
              </svg>
              Заказать в Telegram
            </a>
            <a
              href={socialLinks.vkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-foreground border border-border px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.101-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.101-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.101.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.169-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
              </svg>
              Написать во VK
            </a>
            <a
              href={socialLinks.maxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-foreground border border-border px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-secondary/80 transition-all"
            >
              Написать в Max
            </a>
          </div>

          {/* Badges */}
          <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-500 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {badges.map((badge, index) => {
              const Icon = getIcon(badge.icon, Clock)
              return (
                <div
                  key={badge._key || index}
                  className="flex items-center gap-2 bg-card/80 backdrop-blur border border-border rounded-lg px-4 py-2.5"
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{badge.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
