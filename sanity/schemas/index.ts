// Sanity Schema Definitions

export const hero = {
  name: 'hero',
  title: 'Главный экран',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      title: 'Заголовок', 
      type: 'string',
      initialValue: 'Эвакуация авто в Белгороде — быстро, надёжно, выгодно'
    },
    { 
      name: 'titleHighlight1', 
      title: 'Выделенное слово 1 (зелёное)', 
      type: 'string',
      initialValue: 'быстро'
    },
    { 
      name: 'titleHighlight2', 
      title: 'Выделенное слово 2 (оранжевое)', 
      type: 'string',
      initialValue: 'выгодно'
    },
    { 
      name: 'subtitle', 
      title: 'Подзаголовок', 
      type: 'text',
      initialValue: 'Подаём эвакуатор за 15–40 минут в любую точку города. Работаем с легковыми авто, внедорожниками, мотоциклами и спецтехникой.'
    },
    { 
      name: 'tagText', 
      title: 'Текст метки', 
      type: 'string',
      initialValue: 'Эвакуация 24/7'
    },
    { 
      name: 'telegramUrl', 
      title: 'Ссылка Telegram', 
      type: 'url',
      initialValue: 'https://t.me/evacuator31bot'
    },
    { 
      name: 'vkUrl', 
      title: 'Ссылка VK', 
      type: 'url',
      initialValue: 'https://vk.me/evacuator31bot'
    },
    { 
      name: 'maxUrl', 
      title: 'Ссылка Max', 
      type: 'url',
      initialValue: 'https://max.com/evacuator31bot'
    },
    { name: 'heroImage', title: 'Фоновое изображение', type: 'image' },
    {
      name: 'badges',
      title: 'Значки',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Иконка',
            type: 'string',
            options: { list: ['clock', 'mapPin', 'bot'] }
          },
          { name: 'text', title: 'Текст', type: 'string' }
        ]
      }],
      initialValue: [
        { icon: 'clock', text: 'Подача от 15 мин' },
        { icon: 'mapPin', text: 'По всей области' },
        { icon: 'bot', text: 'Онлайн-заказ' }
      ]
    }
  ]
}

export const service = {
  name: 'service',
  title: 'Услуги',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      options: { list: ['car', 'truck', 'alertTriangle', 'route'] }
    },
    { name: 'title', title: 'Название', type: 'string' },
    { name: 'description', title: 'Описание', type: 'text' },
    { name: 'price', title: 'Цена', type: 'string' },
    { name: 'image', title: 'Изображение', type: 'image' },
    { name: 'orderUrl', title: 'Ссылка для заказа', type: 'url' },
    { name: 'order', title: 'Порядок', type: 'number' }
  ]
}

export const benefit = {
  name: 'benefit',
  title: 'Преимущества',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      options: { list: ['messageSquare', 'dollarSign', 'shield', 'wrench'] }
    },
    { name: 'title', title: 'Название', type: 'string' },
    { name: 'description', title: 'Описание', type: 'text' },
    { name: 'order', title: 'Порядок', type: 'number' }
  ]
}

export const step = {
  name: 'step',
  title: 'Как это работает',
  type: 'document',
  fields: [
    { name: 'num', title: 'Номер шага', type: 'string' },
    {
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      options: { list: ['fileText', 'calculator', 'truck'] }
    },
    { name: 'title', title: 'Название', type: 'string' },
    { name: 'description', title: 'Описание', type: 'text' },
    { name: 'order', title: 'Порядок', type: 'number' }
  ]
}

export const notice = {
  name: 'notice',
  title: 'Блок уведомления',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      title: 'Заголовок', 
      type: 'string',
      initialValue: 'Без скрытых платежей'
    },
    { 
      name: 'description', 
      title: 'Описание', 
      type: 'text',
      initialValue: 'Все цены — фиксированные. Стоимость не изменится, даже если водитель приедет раньше или позже.'
    }
  ]
}

export const pricing = {
  name: 'pricing',
  title: 'Цены',
  type: 'document',
  fields: [
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Прозрачные цены'
    },
    { 
      name: 'sectionSubtitle', 
      title: 'Подзаголовок секции', 
      type: 'string',
      initialValue: 'без скрытых платежей'
    },
    { 
      name: 'sectionDescription', 
      title: 'Описание секции', 
      type: 'text',
      initialValue: 'Фиксированные тарифы — вы всегда знаете, сколько заплатите. Никаких сюрпризов.'
    },
    { 
      name: 'footerNote', 
      title: 'Примечание', 
      type: 'text',
      initialValue: '* Точную стоимость уточняйте у оператора. Цена зависит от расстояния и типа техники.'
    },
    {
      name: 'plans',
      title: 'Тарифы',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Название тарифа', type: 'string' },
          { name: 'price', title: 'Цена', type: 'string' },
          { name: 'features', title: 'Особенности', type: 'array', of: [{ type: 'string' }] },
          { name: 'cta', title: 'Текст кнопки', type: 'string' },
          { name: 'href', title: 'Ссылка кнопки', type: 'url' },
          { name: 'highlight', title: 'Выделить (популярный)', type: 'boolean' },
          { name: 'order', title: 'Порядок', type: 'number' }
        ]
      }],
      initialValue: [
        {
          name: 'По городу',
          price: 'от 2500 ₽',
          features: ['Подача от 15 минут', 'Фиксированная цена', 'Любой тип авто'],
          cta: 'Заказать',
          href: 'https://t.me/evacuator31bot',
          highlight: false,
          order: 1
        },
        {
          name: 'Межгород',
          price: 'от 35 ₽/км',
          features: ['Доставка в другой город', 'Страховка груза', 'Отслеживание онлайн'],
          cta: 'Рассчитать',
          href: 'https://t.me/evacuator31bot',
          highlight: true,
          order: 2
        },
        {
          name: 'Спецтехника',
          price: 'от 4000 ₽',
          features: ['Погрузчики, тракторы', 'Мощный эвакуатор', 'Опытные водители'],
          cta: 'Уточнить',
          href: 'https://t.me/evacuator31bot',
          highlight: false,
          order: 3
        }
      ]
    }
  ]
}

export const zone = {
  name: 'zone',
  title: 'Зона работы',
  type: 'document',
  fields: [
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Работаем по всей'
    },
    { 
      name: 'sectionSubtitle', 
      title: 'Подзаголовок секции', 
      type: 'string',
      initialValue: 'Белгородской области'
    },
    {
      name: 'areas',
      title: 'Районы',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Текст', type: 'string' }
        ]
      }],
      initialValue: [
        { text: 'Белгород и пригород' },
        { text: 'Старый Оскол' },
        { text: 'Губкин' },
        { text: 'Шебекино' },
        { text: 'Валуйки' },
        { text: 'Алексеевка' },
        { text: 'Строитель' },
        { text: 'Новый Оскол' },
        { text: 'Другие районы' }
      ]
    },
    { 
      name: 'tipText', 
      title: 'Подсказка', 
      type: 'text',
      initialValue: 'Выезжаем в соседние области: Курская, Воронежская, Харьковская (при возможности).'
    },
    { name: 'image', title: 'Изображение', type: 'image' },
    { 
      name: 'badgeTitle', 
      title: 'Текст значка', 
      type: 'string',
      initialValue: '30+'
    },
    { 
      name: 'badgeSubtitle', 
      title: 'Подпись значка', 
      type: 'string',
      initialValue: 'населённых пунктов'
    }
  ]
}

export const contactsSection = {
  name: 'contactsSection',
  title: 'Контакты',
  type: 'document',
  fields: [
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Свяжитесь с нами'
    },
    { 
      name: 'sectionSubtitle', 
      title: 'Подзаголовок секции', 
      type: 'string',
      initialValue: 'Выберите удобный способ связи'
    },
    { 
      name: 'responseTime', 
      title: 'Время ответа', 
      type: 'string',
      initialValue: 'Отвечаем за 2 минуты'
    },
    { 
      name: 'phone', 
      title: 'Телефон', 
      type: 'string',
      initialValue: '+7 (4722) 00-00-00'
    },
    { 
      name: 'schedule', 
      title: 'График работы', 
      type: 'string',
      initialValue: 'Круглосуточно, без выходных'
    },
    { 
      name: 'botFeature', 
      title: 'Текст о боте', 
      type: 'string',
      initialValue: 'Автоматический расчёт стоимости'
    },
    {
      name: 'contacts',
      title: 'Контакты',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'platform',
            title: 'Платформа',
            type: 'string',
            options: { list: ['telegram', 'vk', 'max'] }
          },
          { name: 'title', title: 'Название', type: 'string' },
          { name: 'description', title: 'Описание', type: 'text' },
          { name: 'url', title: 'Ссылка', type: 'url' },
          { name: 'order', title: 'Порядок', type: 'number' }
        ]
      }],
      initialValue: [
        {
          platform: 'telegram',
          title: 'Telegram',
          description: 'Быстрый заказ через бота',
          url: 'https://t.me/evacuator31bot',
          order: 1
        },
        {
          platform: 'vk',
          title: 'ВКонтакте',
          description: 'Сообщество и поддержка',
          url: 'https://vk.me/evacuator31bot',
          order: 2
        },
        {
          platform: 'max',
          title: 'Max',
          description: 'Альтернативный мессенджер',
          url: 'https://max.com/evacuator31bot',
          order: 3
        }
      ]
    }
  ]
}

export const faq = {
  name: 'faq',
  title: 'Частые вопросы',
  type: 'document',
  fields: [
    { name: 'question', title: 'Вопрос', type: 'string' },
    { name: 'answer', title: 'Ответ', type: 'text' },
    { name: 'order', title: 'Порядок', type: 'number' }
  ]
}

export const cta = {
  name: 'cta',
  title: 'Призыв к действию',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      title: 'Заголовок', 
      type: 'string',
      initialValue: 'Нужен эвакуатор прямо сейчас?'
    },
    { 
      name: 'description', 
      title: 'Описание', 
      type: 'text',
      initialValue: 'Напишите нам — и мы отправим ближайшую машину. Быстро, без лишних вопросов.'
    },
    { 
      name: 'telegramUrl', 
      title: 'Ссылка Telegram', 
      type: 'url',
      initialValue: 'https://t.me/evacuator31bot'
    },
    { 
      name: 'telegramText', 
      title: 'Текст кнопки Telegram', 
      type: 'string',
      initialValue: 'Написать в Telegram'
    },
    { 
      name: 'vkUrl', 
      title: 'Ссылка VK', 
      type: 'url',
      initialValue: 'https://vk.me/evacuator31'
    },
    { 
      name: 'vkText', 
      title: 'Текст кнопки VK', 
      type: 'string',
      initialValue: 'Написать в VK'
    },
    { 
      name: 'maxUrl', 
      title: 'Ссылка Max', 
      type: 'url',
      initialValue: 'https://max.com/evacuator31'
    },
    { 
      name: 'maxText', 
      title: 'Текст кнопки Max', 
      type: 'string',
      initialValue: 'Написать в Max'
    }
  ]
}

export const footer = {
  name: 'footer',
  title: 'Подвал сайта',
  type: 'document',
  fields: [
    { 
      name: 'cityText', 
      title: 'Город', 
      type: 'string',
      initialValue: 'Белгород'
    },
    { 
      name: 'telegramUrl', 
      title: 'Ссылка Telegram', 
      type: 'url',
      initialValue: 'https://t.me/evacuator31bot'
    },
    { 
      name: 'vkUrl', 
      title: 'Ссылка VK', 
      type: 'url',
      initialValue: 'https://vk.com/evacuator31'
    }
  ]
}

export const navbar = {
  name: 'navbar',
  title: 'Навигация',
  type: 'document',
  fields: [
    { 
      name: 'logoText', 
      title: 'Текст логотипа', 
      type: 'string',
      initialValue: 'Эвакуатор'
    },
    { 
      name: 'logoHighlight', 
      title: 'Выделенная часть логотипа', 
      type: 'string',
      initialValue: '31'
    },
    { 
      name: 'orderButtonText', 
      title: 'Текст кнопки заказа', 
      type: 'string',
      initialValue: 'Заказать'
    },
    { 
      name: 'orderButtonUrl', 
      title: 'Ссылка кнопки заказа', 
      type: 'url',
      initialValue: 'https://t.me/evacuator31bot'
    },
    {
      name: 'links',
      title: 'Ссылки навигации',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Название', type: 'string' },
          { name: 'href', title: 'Ссылка', type: 'string' }
        ]
      }],
      initialValue: [
        { label: 'Услуги', href: '#services' },
        { label: 'Цены', href: '#pricing' },
        { label: 'Зона работы', href: '#zone' },
        { label: 'Контакты', href: '#contacts' },
        { label: 'FAQ', href: '#faq' }
      ]
    }
  ]
}

export const siteSettings = {
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    { 
      name: 'siteTitle', 
      title: 'Название сайта', 
      type: 'string',
      initialValue: 'Эвакуатор 31 — Эвакуация авто в Белгороде'
    },
    { 
      name: 'siteDescription', 
      title: 'Описание сайта', 
      type: 'text',
      initialValue: 'Быстрая эвакуация автомобилей в Белгороде и области. Работаем 24/7. Подача от 15 минут.'
    },
    { 
      name: 'keywords', 
      title: 'Ключевые слова', 
      type: 'array', 
      of: [{ type: 'string' }],
      initialValue: ['эвакуатор', 'белгород', 'эвакуация авто', 'эвакуатор 31']
    }
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
