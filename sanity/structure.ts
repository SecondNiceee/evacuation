import type { StructureBuilder } from 'sanity/structure'

// All document types are now singletons
const singletonTypes = [
  'hero',
  'servicesSection',
  'benefitsSection',
  'stepsSection',
  'notice',
  'pricing',
  'zone',
  'contactsSection',
  'faqSection',
  'cta',
  'footer',
  'navbar',
  'siteSettings',
]

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент сайта')
    .items([
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
      S.listItem()
        .title('Секция Услуги')
        .id('servicesSection')
        .child(
          S.document()
            .schemaType('servicesSection')
            .documentId('servicesSection')
            .title('Секция Услуги')
        ),
      S.listItem()
        .title('Секция Преимущества')
        .id('benefitsSection')
        .child(
          S.document()
            .schemaType('benefitsSection')
            .documentId('benefitsSection')
            .title('Секция Преимущества')
        ),
      S.listItem()
        .title('Секция Как это работает')
        .id('stepsSection')
        .child(
          S.document()
            .schemaType('stepsSection')
            .documentId('stepsSection')
            .title('Секция Как это работает')
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
        .title('Секция Цены')
        .id('pricing')
        .child(
          S.document()
            .schemaType('pricing')
            .documentId('pricing')
            .title('Секция Цены')
        ),
      S.listItem()
        .title('Секция Зона работы')
        .id('zone')
        .child(
          S.document()
            .schemaType('zone')
            .documentId('zone')
            .title('Секция Зона работы')
        ),
      S.listItem()
        .title('Секция Контакты')
        .id('contactsSection')
        .child(
          S.document()
            .schemaType('contactsSection')
            .documentId('contactsSection')
            .title('Секция Контакты')
        ),
      S.listItem()
        .title('Секция FAQ')
        .id('faqSection')
        .child(
          S.document()
            .schemaType('faqSection')
            .documentId('faqSection')
            .title('Секция FAQ')
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

// Filter out duplicate action for singletons
export const singletonActions = (prev: any, context: any) => {
  if (singletonTypes.includes(context.schemaType)) {
    return prev.filter((action: any) => action.action !== 'duplicate')
  }
  return prev
}

// Hide all types from the global "Create" menu since all are singletons
export const newDocumentOptions = (prev: any) => {
  return prev.filter((item: any) => !singletonTypes.includes(item.templateId))
}
