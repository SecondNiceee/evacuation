// Sanity Schema Definitions
// Copy these schemas to your Sanity Studio project

export const hero = {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'titleHighlight1', title: 'Highlighted Word 1 (green)', type: 'string' },
    { name: 'titleHighlight2', title: 'Highlighted Word 2 (orange)', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'tagText', title: 'Tag Text', type: 'string' },
    { name: 'telegramUrl', title: 'Telegram URL', type: 'url' },
    { name: 'vkUrl', title: 'VK URL', type: 'url' },
    { name: 'maxUrl', title: 'Max URL', type: 'url' },
    { name: 'heroImage', title: 'Hero Background Image', type: 'image' },
    {
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: { list: ['clock', 'mapPin', 'bot'] }
          },
          { name: 'text', title: 'Text', type: 'string' }
        ]
      }]
    }
  ]
}

export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: { list: ['car', 'truck', 'alertTriangle', 'route'] }
    },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'price', title: 'Price', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'orderUrl', title: 'Order URL', type: 'url' },
    { name: 'order', title: 'Order', type: 'number' }
  ]
}

export const benefit = {
  name: 'benefit',
  title: 'Benefits (Why Us)',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: { list: ['messageSquare', 'dollarSign', 'shield', 'wrench'] }
    },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'order', title: 'Order', type: 'number' }
  ]
}

export const step = {
  name: 'step',
  title: 'How It Works Steps',
  type: 'document',
  fields: [
    { name: 'num', title: 'Step Number', type: 'string' },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: { list: ['fileText', 'calculator', 'truck'] }
    },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'order', title: 'Order', type: 'number' }
  ]
}

export const notice = {
  name: 'notice',
  title: 'Notice Block',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' }
  ]
}

export const pricing = {
  name: 'pricing',
  title: 'Pricing Section',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionSubtitle', title: 'Section Subtitle', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    { name: 'footerNote', title: 'Footer Note', type: 'text' },
    {
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Plan Name', type: 'string' },
          { name: 'price', title: 'Price', type: 'string' },
          { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
          { name: 'cta', title: 'CTA Text', type: 'string' },
          { name: 'href', title: 'CTA URL', type: 'url' },
          { name: 'highlight', title: 'Highlight (Popular)', type: 'boolean' },
          { name: 'order', title: 'Order', type: 'number' }
        ]
      }]
    }
  ]
}

export const zone = {
  name: 'zone',
  title: 'Zone Section',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionSubtitle', title: 'Section Subtitle', type: 'string' },
    {
      name: 'areas',
      title: 'Areas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Text', type: 'string' }
        ]
      }]
    },
    { name: 'tipText', title: 'Tip Text', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'badgeTitle', title: 'Badge Title', type: 'string' },
    { name: 'badgeSubtitle', title: 'Badge Subtitle', type: 'string' }
  ]
}

export const contactsSection = {
  name: 'contactsSection',
  title: 'Contacts Section',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionSubtitle', title: 'Section Subtitle', type: 'string' },
    { name: 'responseTime', title: 'Response Time', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'schedule', title: 'Schedule', type: 'string' },
    { name: 'botFeature', title: 'Bot Feature Text', type: 'string' },
    {
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: { list: ['telegram', 'vk', 'max'] }
          },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'url', title: 'URL', type: 'url' },
          { name: 'order', title: 'Order', type: 'number' }
        ]
      }]
    }
  ]
}

export const faq = {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'answer', title: 'Answer', type: 'text' },
    { name: 'order', title: 'Order', type: 'number' }
  ]
}

export const cta = {
  name: 'cta',
  title: 'CTA Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'telegramUrl', title: 'Telegram URL', type: 'url' },
    { name: 'telegramText', title: 'Telegram Button Text', type: 'string' },
    { name: 'vkUrl', title: 'VK URL', type: 'url' },
    { name: 'vkText', title: 'VK Button Text', type: 'string' },
    { name: 'maxUrl', title: 'Max URL', type: 'url' },
    { name: 'maxText', title: 'Max Button Text', type: 'string' }
  ]
}

export const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    { name: 'cityText', title: 'City Text', type: 'string' },
    { name: 'telegramUrl', title: 'Telegram URL', type: 'url' },
    { name: 'vkUrl', title: 'VK URL', type: 'url' }
  ]
}

export const navbar = {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    { name: 'logoText', title: 'Logo Text', type: 'string' },
    { name: 'logoHighlight', title: 'Logo Highlight', type: 'string' },
    { name: 'orderButtonText', title: 'Order Button Text', type: 'string' },
    { name: 'orderButtonUrl', title: 'Order Button URL', type: 'url' },
    {
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'Href', type: 'string' }
        ]
      }]
    }
  ]
}

export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', title: 'Site Title', type: 'string' },
    { name: 'siteDescription', title: 'Site Description', type: 'text' },
    { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }
  ]
}

// Export all schemas
export const schemaTypes = [
  hero,
  service,
  benefit,
  step,
  notice,
  pricing,
  zone,
  contactsSection,
  faq,
  cta,
  footer,
  navbar,
  siteSettings
]
