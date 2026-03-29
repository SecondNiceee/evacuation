import { fetchPageData } from "@/lib/sanity"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Zone } from "@/components/zone"
import { Contacts } from "@/components/contacts"
import { FAQ } from "@/components/faq"
import { CTA, Footer } from "@/components/cta"

export const revalidate = 60 // Revalidate every 60 seconds

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://155.212.138.216'

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Купить права СПб",
  "description": "Купить водительские права в Санкт-Петербурге. Все категории: A, B, C, D. Быстрое оформление без автошколы.",
  "url": siteUrl,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Санкт-Петербург",
    "addressCountry": "RU"
  },
  "areaServed": "Санкт-Петербург",
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59"
}

export default async function Page() {
  const data = await fetchPageData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
      <Navbar data={data.navbar} />
      <Hero data={data.hero} siteSettings={data.siteSettings} />
      <Services data={data.servicesSection} />
      <WhyUs data={data.benefitsSection} />
      <HowItWorks stepsData={data.stepsSection} noticeData={data.notice} />
      <Pricing data={data.pricing} />
      <Zone data={data.zone} />
      <Contacts data={data.contactsSection} />
      <FAQ data={data.faqSection} />
      <CTA ctaData={data.cta} siteSettings={data.siteSettings} />
      <Footer footerData={data.footer} siteSettings={data.siteSettings} />
      </main>
    </>
  )
}
