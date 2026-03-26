import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client for CLIENT-SIDE fetching (static export compatible)
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disable CDN to get fresh data immediately after updates
})

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types for Sanity content
export interface SanityHero {
  _id: string
  title: string
  titleHighlight1: string
  titleHighlight2: string
  subtitle: string
  tagText: string
  heroImage?: SanityImageSource
  badges: Array<{
    _key: string
    icon: string // Russian icon name
    text: string
  }>
}

export interface SanityServiceItem {
  _key: string
  icon: string // Russian icon name
  title: string
  description: string
  price: string
  image?: SanityImageSource
  orderUrl: string
}

export interface SanityServicesSection {
  _id: string
  sectionLabel: string
  sectionTitle: string
  items: SanityServiceItem[]
}

export interface SanityBenefitItem {
  _key: string
  icon: string // Russian icon name
  title: string
  description: string
}

export interface SanityBenefitsSection {
  _id: string
  sectionLabel: string
  sectionTitle: string
  items: SanityBenefitItem[]
}

export interface SanityStepItem {
  _key: string
  num: string
  icon: string // Russian icon name
  title: string
  description: string
}

export interface SanityStepsSection {
  _id: string
  sectionLabel: string
  sectionTitle: string
  items: SanityStepItem[]
}

export interface SanityNotice {
  _id: string
  title: string
  description: string
}

export interface SanityPlan {
  _id: string
  _key?: string
  name: string
  price: string
  features: string[]
  cta: string
  href: string
  highlight: boolean
  order: number
}

export interface SanityPricing {
  _id: string
  sectionTitle: string
  sectionSubtitle: string
  sectionDescription: string
  footerNote: string
  plans: SanityPlan[]
}

export interface SanityArea {
  _key: string
  text: string
}

export interface SanityZone {
  _id: string
  sectionTitle: string
  sectionSubtitle: string
  areas: SanityArea[]
  tipText: string
  image?: SanityImageSource
  badgeTitle: string
  badgeSubtitle: string
}

export interface SanityContact {
  _id: string
  _key?: string
  platform: 'telegram' | 'vk' | 'max'
  title: string
  description: string
  url: string
  order: number
}

export interface SanityContactsSection {
  _id: string
  sectionTitle: string
  sectionSubtitle: string
  responseTime: string
  phone: string
  schedule: string
  botFeature: string
  contacts: SanityContact[]
}

export interface SanityFaqItem {
  _key: string
  question: string
  answer: string
}

export interface SanityFaqSection {
  _id: string
  sectionLabel: string
  sectionTitle: string
  items: SanityFaqItem[]
}

export interface SanityCta {
  _id: string
  title: string
  description: string
}

export interface SanityFooter {
  _id: string
  cityText: string
}

export interface SanityNavbar {
  _id: string
  logoType: 'text' | 'image'
  logoText: string
  logoHighlight: string
  logoImage?: SanityImageSource
  orderButtonText: string
  orderButtonUrl: string
  links: Array<{
    _key: string
    label: string
    section: string // Section ID: services, pricing, how, zone, contacts, faq
  }>
}

export interface SanitySiteSettings {
  _id: string
  siteTitle: string
  siteDescription: string
  keywords: string[]
  socialLinks: {
    telegramUrl: string
    vkUrl: string
    maxUrl: string
    phoneNumber: string
  }
}

// GROQ Queries - Singletons use fixed document IDs
export const queries = {
  hero: `*[_id == "hero"][0]`,
  servicesSection: `*[_id == "servicesSection"][0]{ ..., items[]{ ..., _key } }`,
  benefitsSection: `*[_id == "benefitsSection"][0]{ ..., items[]{ ..., _key } }`,
  stepsSection: `*[_id == "stepsSection"][0]{ ..., items[]{ ..., _key } }`,
  notice: `*[_id == "notice"][0]`,
  pricing: `*[_id == "pricing"][0]{ ..., plans[]{ ..., _key } }`,
  zone: `*[_id == "zone"][0]`,
  contactsSection: `*[_id == "contactsSection"][0]{ ..., contacts[]{ ..., _key } }`,
  faqSection: `*[_id == "faqSection"][0]{ ..., items[]{ ..., _key } }`,
  cta: `*[_id == "cta"][0]`,
  footer: `*[_id == "footer"][0]`,
  navbar: `*[_id == "navbar"][0]{ ..., logoImage{ asset-> } }`,
  siteSettings: `*[_id == "siteSettings"][0]`,
}
