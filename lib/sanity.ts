import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client for CLIENT-SIDE fetching (static export compatible)
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster responses on client
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
  telegramUrl: string
  vkUrl: string
  maxUrl: string
  heroImage?: SanityImageSource
  badges: Array<{
    _key: string
    icon: 'clock' | 'mapPin' | 'bot'
    text: string
  }>
}

export interface SanityService {
  _id: string
  _key?: string
  icon: 'car' | 'truck' | 'alertTriangle' | 'route'
  title: string
  description: string
  price: string
  image?: SanityImageSource
  orderUrl: string
  order: number
}

export interface SanityBenefit {
  _id: string
  _key?: string
  icon: 'messageSquare' | 'dollarSign' | 'shield' | 'wrench'
  title: string
  description: string
  order: number
}

export interface SanityStep {
  _id: string
  _key?: string
  num: string
  icon: 'fileText' | 'calculator' | 'truck'
  title: string
  description: string
  order: number
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

export interface SanityFaq {
  _id: string
  _key?: string
  question: string
  answer: string
  order: number
}

export interface SanityCta {
  _id: string
  title: string
  description: string
  telegramUrl: string
  telegramText: string
  vkUrl: string
  vkText: string
  maxUrl: string
  maxText: string
}

export interface SanityFooter {
  _id: string
  cityText: string
  telegramUrl: string
  vkUrl: string
}

export interface SanityNavbar {
  _id: string
  logoText: string
  logoHighlight: string
  orderButtonText: string
  orderButtonUrl: string
  links: Array<{
    _key: string
    label: string
    href: string
  }>
}

export interface SanitySiteSettings {
  _id: string
  siteTitle: string
  siteDescription: string
  keywords: string[]
}

// GROQ Queries
export const queries = {
  hero: `*[_type == "hero"][0]`,
  services: `*[_type == "service"] | order(order asc)`,
  benefits: `*[_type == "benefit"] | order(order asc)`,
  steps: `*[_type == "step"] | order(order asc)`,
  notice: `*[_type == "notice"][0]`,
  pricing: `*[_type == "pricing"][0]{ ..., plans[]{ ..., _key } }`,
  zone: `*[_type == "zone"][0]`,
  contactsSection: `*[_type == "contactsSection"][0]{ ..., contacts[]{ ..., _key } }`,
  faqs: `*[_type == "faq"] | order(order asc)`,
  cta: `*[_type == "cta"][0]`,
  footer: `*[_type == "footer"][0]`,
  navbar: `*[_type == "navbar"][0]`,
  siteSettings: `*[_type == "siteSettings"][0]`,
}
