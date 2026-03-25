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

// Секция Услуги - singleton с заголовком и массивом услуг
export const servicesSection = {
  name: 'servicesSection',
  title: 'Секция Услуги',
  type: 'document',
  fields: [
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Наши услуги'
    },
    { 
      name: 'sectionSubtitle', 
      title: 'Подзаголовок секции', 
      type: 'string',
      initialValue: 'Полный спектр услуг эвакуации'
    },
    {
      name: 'services',
      title: 'Услуги',
      type: 'array',
      of: [{
        type: 'object',
        name: 'serviceItem',
        title: 'Услуга',
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
          { name: 'orderUrl', title: 'Ссылка для заказа', type: 'url' }
        ],
        preview: {
          select: { title: 'title', subtitle: 'price' }
        }
      }],
      initialValue: [
        {
          icon: 'car',
          title: 'Легковые автомобили',
          description: 'Эвакуация седанов, хэтчбеков, универсалов. Бережная погрузка и доставка.',
          price: 'от 2500 ₽',
          orderUrl: 'https://t.me/evacuator31bot'
        },
        {
          icon: 'truck',
          title: 'Внедорожники и кроссоверы',
          description: 'Эвакуация тяжёлых автомобилей с полным приводом.',
          price: 'от 3000 ₽',
          orderUrl: 'https://t.me/evacuator31bot'
        },
        {
          icon: 'alertTriangle',
          title: 'Аварийная эвакуация',
          description: 'Срочный выезд на место ДТП. Работаем со страховыми.',
          price: 'от 2500 ₽',
          orderUrl: 'https://t.me/evacuator31bot'
        },
        {
          icon: 'route',
          title: 'Межгород',
          description: 'Доставка автомобиля в другой город. Отслеживание онлайн.',
          price: 'от 35 ₽/км',
          orderUrl: 'https://t.me/evacuator31bot'
        }
      ]
    }
  ]
}

// Секция Преимущества - singleton с заголовком и массивом преимуществ
export const benefitsSection = {
  name: 'benefitsSection',
  title: 'Секция Преимущества',
  type: 'document',
  fields: [
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Почему выбирают нас'
    },
    { 
      name: 'sectionSubtitle', 
      title: 'Подзаголовок секции', 
      type: 'string',
      initialValue: 'Преимущества работы с нами'
    },
    {
      name: 'benefits',
      title: 'Преимущества',
      type: 'array',
      of: [{
        type: 'object',
        name: 'benefitItem',
        title: 'Преимущество',
        fields: [
          {
            name: 'icon',
            title: 'Иконка',
            type: 'string',
            options: { list: ['messageSquare', 'dollarSign', 'shield', 'wrench'] }
          },
          { name: 'title', title: 'Название', type: 'string' },
          { name: 'description', title: 'Описание', type: 'text' }
        ],
        preview: {
          select: { title: 'title' }
        }
      }],
      initialValue: [
        {
          icon: 'messageSquare',
          title: 'Удобный заказ',
          description: 'Заказывайте через Telegram-бот — без звонков и ожидания на линии.'
        },
        {
          icon: 'dollarSign',
          title: 'Честные цены',
          description: 'Фиксированная стоимость. Никаких скрытых платежей и накруток.'
        },
        {
          icon: 'shield',
          title: 'Бережная погрузка',
          description: 'Современное оборудование. Ваш автомобиль в безопасности.'
        },
        {
          icon: 'wrench',
          title: 'Техпомощь на месте',
          description: 'Мелкий ремонт, подзарядка аккумулятора, подвоз топлива.'
        }
      ]
    }
  ]
}

// Секция Как это работает - singleton с заголовком и массивом шагов
export const stepsSection = {
  name: 'stepsSection',
  title: 'Секция Как это работает',
  type: 'document',
  fields: [
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Как это работает'
    },
    { 
      name: 'sectionSubtitle', 
      title: 'Подзаголовок секции', 
      type: 'string',
      initialValue: 'Три простых шага'
    },
    {
      name: 'steps',
      title: 'Шаги',
      type: 'array',
      of: [{
        type: 'object',
        name: 'stepItem',
        title: 'Шаг',
        fields: [
          { name: 'num', title: 'Номер шага', type: 'string' },
          {
            name: 'icon',
            title: 'Иконка',
            type: 'string',
            options: { list: ['fileText', 'calculator', 'truck'] }
          },
          { name: 'title', title: 'Название', type: 'string' },
          { name: 'description', title: 'Описание', type: 'text' }
        ],
        preview: {
          select: { title: 'title', num: 'num' },
          prepare({ title, num }: { title: string; num: string }) {
            return { title: `${num}. ${title}` }
          }
        }
      }],
      initialValue: [
        {
          num: '01',
          icon: 'fileText',
          title: 'Оставьте заявку',
          description: 'Напишите боту в Telegram или VK. Укажите адрес и тип авто.'
        },
        {
          num: '02',
          icon: 'calculator',
          title: 'Получите расчёт',
          description: 'Бот автоматически рассчитает стоимость и время подачи.'
        },
        {
          num: '03',
          icon: 'truck',
          title: 'Дождитесь эвакуатор',
          description: 'Водитель приедет в указанное время и доставит авто.'
        }
      ]
    }
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
  title: 'Секция Цены',
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
        name: 'planItem',
        title: 'Тариф',
        fields: [
          { name: 'name', title: 'Название тарифа', type: 'string' },
          { name: 'price', title: 'Цена', type: 'string' },
          { name: 'features', title: 'Особенности', type: 'array', of: [{ type: 'string' }] },
          { name: 'cta', title: 'Текст кнопки', type: 'string' },
          { name: 'href', title: 'Ссылка кнопки', type: 'url' },
          { name: 'highlight', title: 'Выделить (популярный)', type: 'boolean' }
        ],
        preview: {
          select: { title: 'name', subtitle: 'price' }
        }
      }],
      initialValue: [
        {
          name: 'По городу',
          price: 'от 2500 ₽',
          features: ['Подача от 15 минут', 'Фиксированная цена', 'Любой тип авто'],
          cta: 'Заказать',
          href: 'https://t.me/evacuator31bot',
          highlight: false
        },
        {
          name: 'Межгород',
          price: 'от 35 ₽/км',
          features: ['Доставка в другой город', 'Страховка груза', 'Отслеживание онлайн'],
          cta: 'Рассчитать',
          href: 'https://t.me/evacuator31bot',
          highlight: true
        },
        {
          name: 'Спецтехника',
          price: 'от 4000 ₽',
          features: ['Погрузчики, тракторы', 'Мощный эвакуатор', 'Опытные водители'],
          cta: 'Уточнить',
          href: 'https://t.me/evacuator31bot',
          highlight: false
        }
      ]
    }
  ]
}

export const zone = {
  name: 'zone',
  title: 'Секция Зона работы',
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
        ],
        preview: {
          select: { title: 'text' }
        }
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
  title: 'Секция Контакты',
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
        name: 'contactItem',
        title: 'Контакт',
        fields: [
          {
            name: 'platform',
            title: 'Платформа',
            type: 'string',
            options: { list: ['telegram', 'vk', 'max'] }
          },
          { name: 'title', title: 'Название', type: 'string' },
          { name: 'description', title: 'Описание', type: 'text' },
          { name: 'url', title: 'Ссылка', type: 'url' }
        ],
        preview: {
          select: { title: 'title', subtitle: 'platform' }
        }
      }],
      initialValue: [
        {
          platform: 'telegram',
          title: 'Telegram',
          description: 'Быстрый заказ через бота',
          url: 'https://t.me/evacuator31bot'
        },
        {
          platform: 'vk',
          title: 'ВКонтакте',
          description: 'Сообщество и поддержка',
          url: 'https://vk.me/evacuator31bot'
        },
        {
          platform: 'max',
          title: 'Max',
          description: 'Альтернативный мессенджер',
          url: 'https://max.com/evacuator31bot'
        }
      ]
    }
  ]
}

// Секция FAQ - singleton с заголовком и массивом вопросов
export const faqSection = {
  name: 'faqSection',
  title: 'Секция FAQ',
  type: 'document',
  fields: [
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Частые вопросы'
    },
    { 
      name: 'sectionSubtitle', 
      title: 'Подзаголовок секции', 
      type: 'string',
      initialValue: 'Ответы на популярные вопросы'
    },
    {
      name: 'faqs',
      title: 'Вопросы и ответы',
      type: 'array',
      of: [{
        type: 'object',
        name: 'faqItem',
        title: 'Вопрос',
        fields: [
          { name: 'question', title: 'Вопрос', type: 'string' },
          { name: 'answer', title: 'Ответ', type: 'text' }
        ],
        preview: {
          select: { title: 'question' }
        }
      }],
      initialValue: [
        {
          question: 'Как быстро приедет эвакуатор?',
          answer: 'В черте города — от 15 до 40 минут. За городом время зависит от расстояния.'
        },
        {
          question: 'Можно ли заказать эвакуатор ночью?',
          answer: 'Да, мы работаем круглосуточно, без выходных и праздников.'
        },
        {
          question: 'Как оплатить услугу?',
          answer: 'Наличными водителю или переводом на карту. Выдаём чек.'
        },
        {
          question: 'Эвакуируете ли вы мотоциклы?',
          answer: 'Да, у нас есть специальное оборудование для безопасной перевозки мотоциклов.'
        },
        {
          question: 'Что делать, если машина заблокирована?',
          answer: 'Наши водители имеют опыт работы с заблокированными автомобилями. Погрузим аккуратно.'
        }
      ]
    }
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
        ],
        preview: {
          select: { title: 'label', subtitle: 'href' }
        }
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
  servicesSection,
  benefitsSection,
  stepsSection,
  notice,
  pricing,
  zone,
  contactsSection,
  faqSection,
  cta,
  footer,
  navbar,
  siteSettings
]
