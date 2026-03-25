import type { StructureBuilder } from 'sanity/structure'

// Singleton document types - only one instance allowed
const singletonTypes = [
  'hero',
  'notice',
  'pricing',
  'zone',
  'contactsSection',
  'cta',
  'footer',
  'navbar',
  'siteSettings',
]

// Singleton document IDs
const singletonIds = {
  hero: 'hero',
  notice: 'notice',
  pricing: 'pricing',
  zone: 'zone',
  contactsSection: 'contactsSection',
  cta: 'cta',
  footer: 'footer',
  navbar: 'navbar',
  siteSettings: 'siteSettings',
}

// Titles for singleton documents
const singletonTitles: Record<string, string> = {
  hero: 'Главный экран',
  notice: 'Блок уведомления',
  pricing: 'Цены',
  zone: 'Зона работы',
  contactsSection: 'Контакты',
  cta: 'Призыв к действию',
  footer: 'Подвал сайта',
  navbar: 'Навигация',
  siteSettings: 'Настройки сайта',
}

// List document types (multiple instances allowed)
const listTypes = [
  { type: 'service', title: 'Услуги' },
  { type: 'benefit', title: 'Преимущества' },
  { type: 'step', title: 'Как это работает' },
  { type: 'faq', title: 'Частые вопросы' },
]

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент сайта')
    .items([
      // Singleton documents
      S.listItem()
        .title('Настройки сайта')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Настройки сайта')
        ),
      S.divider(),
      S.listItem()
        .title('Навигация')
        .id('navbar')
        .child(
          S.document()
            .schemaType('navbar')
            .documentId('navbar')
            .title('Навигация')
        ),
      S.listItem()
        .title('Главный экран')
        .id('hero')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
            .title('Главный экран')
        ),
      S.divider(),
      // List documents
      ...listTypes.map(({ type, title }) =>
        S.listItem()
          .title(title)
          .schemaType(type)
          .child(S.documentTypeList(type).title(title))
      ),
      S.divider(),
      S.listItem()
        .title('Блок уведомления')
        .id('notice')
        .child(
          S.document()
            .schemaType('notice')
            .documentId('notice')
            .title('Блок уведомления')
        ),
      S.listItem()
        .title('Цены')
        .id('pricing')
        .child(
          S.document()
            .schemaType('pricing')
            .documentId('pricing')
            .title('Цены')
        ),
      S.listItem()
        .title('Зона работы')
        .id('zone')
        .child(
          S.document()
            .schemaType('zone')
            .documentId('zone')
            .title('Зона работы')
        ),
      S.listItem()
        .title('Контакты')
        .id('contactsSection')
        .child(
          S.document()
            .schemaType('contactsSection')
            .documentId('contactsSection')
            .title('Контакты')
        ),
      S.divider(),
      S.listItem()
        .title('Призыв к действию')
        .id('cta')
        .child(
          S.document()
            .schemaType('cta')
            .documentId('cta')
            .title('Призыв к действию')
        ),
      S.listItem()
        .title('Подвал сайта')
        .id('footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
            .title('Подвал сайта')
        ),
    ])

// Filter out singleton types from the global "New document" menu
export const singletonActions = (prev: any, context: any) => {
  if (singletonTypes.includes(context.schemaType)) {
    return prev.filter((action: any) => action.action !== 'duplicate')
  }
  return prev
}

// Hide singleton types from the global "Create" menu
export const newDocumentOptions = (prev: any) => {
  return prev.filter((item: any) => !singletonTypes.includes(item.templateId))
}
