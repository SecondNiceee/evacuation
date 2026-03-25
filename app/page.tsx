"use client"

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

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
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
