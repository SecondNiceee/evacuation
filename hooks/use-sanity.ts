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

// SWR config for client-side fetching
const swrConfig = {
  revalidateOnFocus: true,      // Обновлять при возврате на вкладку
  revalidateOnReconnect: true,  // Обновлять при восстановлении соединения
  revalidateOnMount: true,      // Обновлять при монтировании компонента
  dedupingInterval: 5000,       // 5 секунд дедупликации (было 60)
  refreshInterval: 0,           // Без автоматического polling
}

export function useHero() {
  return useSWR<SanityHero>('hero', () => fetcher(queries.hero), swrConfig)
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

export function useSiteSettings() {
  return useSWR<SanitySiteSettings>('siteSettings', () => fetcher(queries.siteSettings), swrConfig)
}
