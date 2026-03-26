import useSWR from 'swr'
import {
  sanityClient,
  queries,
  type SanityHero,
  type SanityServicesSection,
  type SanityBenefitsSection,
  type SanityStepsSection,
  type SanityNotice,
  type SanityPricing,
  type SanityZone,
  type SanityContactsSection,
  type SanityFaqSection,
  type SanityCta,
  type SanityFooter,
  type SanityNavbar,
  type SanitySiteSettings
} from '@/lib/sanity'

// Generic fetcher for Sanity
const fetcher = <T>(query: string): Promise<T> => sanityClient.fetch(query)

// Server-side fetch functions (for SSG/SSR)
export async function fetchHero(): Promise<SanityHero | null> {
  return sanityClient.fetch(queries.hero)
}

export async function fetchSiteSettings(): Promise<SanitySiteSettings | null> {
  return sanityClient.fetch(queries.siteSettings)
}

export async function fetchNavbar(): Promise<SanityNavbar | null> {
  return sanityClient.fetch(queries.navbar)
}

export async function fetchAllInitialData() {
  const [hero, siteSettings, navbar] = await Promise.all([
    fetchHero(),
    fetchSiteSettings(),
    fetchNavbar(),
  ])
  return { hero, siteSettings, navbar }
}

// SWR config for client-side fetching
const swrConfig = {
  revalidateOnFocus: true,       // Refetch when user returns to tab
  revalidateOnReconnect: true,   // Refetch on reconnect
  dedupingInterval: 5000,        // 5 seconds deduplication
  refreshInterval: 0,            // No auto-refresh (set to e.g. 30000 for 30s polling)
}

export function useHero(initialData?: SanityHero) {
  return useSWR<SanityHero>('hero', () => fetcher(queries.hero), {
    ...swrConfig,
    fallbackData: initialData,
  })
}

export function useServicesSection() {
  return useSWR<SanityServicesSection>('servicesSection', () => fetcher(queries.servicesSection), swrConfig)
}

export function useBenefitsSection() {
  return useSWR<SanityBenefitsSection>('benefitsSection', () => fetcher(queries.benefitsSection), swrConfig)
}

export function useStepsSection() {
  return useSWR<SanityStepsSection>('stepsSection', () => fetcher(queries.stepsSection), swrConfig)
}

export function useNotice() {
  return useSWR<SanityNotice>('notice', () => fetcher(queries.notice), swrConfig)
}

export function usePricing() {
  return useSWR<SanityPricing>('pricing', () => fetcher(queries.pricing), swrConfig)
}

export function useZone() {
  return useSWR<SanityZone>('zone', () => fetcher(queries.zone), swrConfig)
}

export function useContactsSection() {
  return useSWR<SanityContactsSection>('contactsSection', () => fetcher(queries.contactsSection), swrConfig)
}

export function useFaqSection() {
  return useSWR<SanityFaqSection>('faqSection', () => fetcher(queries.faqSection), swrConfig)
}

export function useCta() {
  return useSWR<SanityCta>('cta', () => fetcher(queries.cta), swrConfig)
}

export function useFooter() {
  return useSWR<SanityFooter>('footer', () => fetcher(queries.footer), swrConfig)
}

export function useNavbar() {
  return useSWR<SanityNavbar>('navbar', () => fetcher(queries.navbar), swrConfig)
}

export function useSiteSettings(initialData?: SanitySiteSettings) {
  return useSWR<SanitySiteSettings>('siteSettings', () => fetcher(queries.siteSettings), {
    ...swrConfig,
    fallbackData: initialData,
  })
}
