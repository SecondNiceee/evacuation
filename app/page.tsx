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
import { fetchHero, fetchSiteSettings } from "@/hooks/use-sanity"

// This runs at build time for static export
export default async function Page() {
  // Fetch data at build time (SSG)
  const [hero, siteSettings] = await Promise.all([
    fetchHero(),
    fetchSiteSettings(),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero initialHero={hero} initialSettings={siteSettings} />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Pricing />
      <Zone />
      <Contacts />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
