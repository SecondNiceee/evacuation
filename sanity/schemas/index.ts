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
            options: { 
              list: [
                { title: 'Часы', value: 'Часы' },
                { title: 'Метка на карте', value: 'Метка на карте' },
                { title: 'Робот', value: 'Робот' },
                { title: 'Телефон', value: 'Телефон' },
                { title: 'Звезда', value: 'Звезда' },
                { title: 'Сердце', value: 'Сердце' },
                { title: 'Щит', value: 'Щит' },
                { title: 'Галочка', value: 'Галочка' }
              ]
            }
          },
          { name: 'text', title: 'Текст', type: 'string' }
        ]
      }],
      initialValue: [
        { icon: 'Часы', text: 'Подача от 15 мин' },
        { icon: 'Метка на карте', text: 'По всей области' },
        { icon: 'Робот', text: 'Онлайн-заказ' }
      ]
    }
  ]
}

export const servicesSection = {
  name: 'servicesSection',
  title: 'Секция услуг',
  type: 'document',
  fields: [
    { 
      name: 'sectionLabel', 
      title: 'Метка секции', 
      type: 'string',
      initialValue: 'Услуги'
    },
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Эвакуируем спецтехнику под ваши задачи'
    },
    {
      name: 'items',
      title: 'Карточки услуг',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Иконка',
            type: 'string',
            options: { 
              list: [
                { title: 'Легковой автомобиль', value: 'Легковой автомобиль' },
                { title: 'Грузовик', value: 'Грузовик' },
                { title: 'Предупреждение', value: 'Предупреждение' },
                { title: 'Маршрут', value: 'Маршрут' },
                { title: 'Ключ', value: 'Ключ' },
                { title: 'Щит', value: 'Щит' }
              ]
            }
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
          icon: 'Легковой автомобиль',
          title: 'Легковые автомобили',
          description: 'До 2,5 тонн. Аккуратная погрузка, фиксация колёс, страховка груза.',
          price: 'От 2 500 ₽',
          orderUrl: 'https://t.me/evacuator31bot'
        },
        {
          icon: 'Грузовик',
          title: 'Грузовые и микроавтобусы',
          description: 'До 10 тонн. Манипуляторы, низкорамные платформы, работа с негабаритом.',
          price: 'От 4 500 ₽',
          orderUrl: 'https://t.me/evacuator31bot'
        },
        {
          icon: 'Предупреждение',
          title: 'После ДТП и сложные случаи',
          description: 'Вытаскиваем из кювета, сугробов, парковок. Работаем со страховыми.',
          price: 'Расчёт индивидуально',
          orderUrl: 'https://t.me/evacuator31bot'
        },
        {
          icon: 'Маршрут',
          title: 'Междугородняя эвакуация',
          description: 'Доставка по Белгородской области и РФ. Прозрачный тариф за км.',
          price: 'От 50 ₽/км',
          orderUrl: 'https://t.me/evacuator31bot'
        }
      ]
    }
  ]
}

export const benefitsSection = {
  name: 'benefitsSection',
  title: 'Секция преимуществ',
  type: 'document',
  fields: [
    { 
      name: 'sectionLabel', 
      title: 'Метка секции', 
      type: 'string',
      initialValue: 'Почему мы'
    },
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Мы сохраним ваши нервы и время'
    },
    {
      name: 'items',
      title: 'Карточки преимуществ',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Иконка',
            type: 'string',
            options: { 
              list: [
                { title: 'Сообщение', value: 'Сообщение' },
                { title: 'Доллар', value: 'Доллар' },
                { title: 'Щит', value: 'Щит' },
                { title: 'Гаечный ключ', value: 'Гаечный ключ' },
                { title: 'Звезда', value: 'Звезда' },
                { title: 'Сердце', value: 'Сердце' },
                { title: 'Часы', value: 'Часы' },
                { title: 'Галочка', value: 'Галочка' }
              ]
            }
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
          icon: 'Сообщение',
          title: 'Удобный заказ',
          description: 'Никаких колл-центров — напишите в VK, Max или создайте заявку через Telegram-бота.'
        },
        {
          icon: 'Доллар',
          title: 'Честная цена',
          description: 'Фикс в момент заказа, без «накруток на месте». Итоговая цена фиксируется до выезда.'
        },
        {
          icon: 'Щит',
          title: 'Ответственность',
          description: 'Договор, фотофиксация авто до погрузки, страховка груза на весь маршрут.'
        },
        {
          icon: 'Гаечный ключ',
          title: 'Опыт',
          description: 'Водители со стажем 5+ лет, спецоснащение для сложных случаев и ДТП.'
        }
      ]
    }
  ]
}

export const stepsSection = {
  name: 'stepsSection',
  title: 'Секция "Как это работает"',
  type: 'document',
  fields: [
    { 
      name: 'sectionLabel', 
      title: 'Метка секции', 
      type: 'string',
      initialValue: 'Как работаем'
    },
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: '3 шага до эвакуации'
    },
    {
      name: 'items',
      title: 'Шаги',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'num', title: 'Номер шага', type: 'string' },
          {
            name: 'icon',
            title: 'Иконка',
            type: 'string',
            options: { 
              list: [
                { title: 'Документ', value: 'Документ' },
                { title: 'Калькулятор', value: 'Калькулятор' },
                { title: 'Грузовик', value: 'Грузовик' },
                { title: 'Телефон', value: 'Телефон' },
                { title: 'Галочка', value: 'Галочка' }
              ]
            }
          },
          { name: 'title', title: 'Название', type: 'string' },
          { name: 'description', title: 'Описание', type: 'text' }
        ],
        preview: {
          select: { title: 'title', subtitle: 'num' }
        }
      }],
      initialValue: [
        {
          num: '01',
          icon: 'Документ',
          title: 'Заявка',
          description: 'Оставьте заявку с подробностями: марка авто, место, проблема. Telegram-бот или мессенджер.'
        },
        {
          num: '02',
          icon: 'Калькулятор',
          title: 'Расчёт и подтверждение',
          description: 'Оператор называет точную цену и время подачи. Фиксируем заказ — без сюрпризов.'
        },
        {
          num: '03',
          icon: 'Грузовик',
          title: 'Подача и эвакуация',
          description: 'Экипаж прибывает, аккуратно грузит, доставляет в нужную точку. Фотоотчёт в чат.'
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

export const faqSection = {
  name: 'faqSection',
  title: 'Секция FAQ',
  type: 'document',
  fields: [
    { 
      name: 'sectionLabel', 
      title: 'Метка секции', 
      type: 'string',
      initialValue: 'FAQ'
    },
    { 
      name: 'sectionTitle', 
      title: 'Заголовок секции', 
      type: 'string',
      initialValue: 'Ответы на частые вопросы'
    },
    {
      name: 'items',
      title: 'Вопросы и ответы',
      type: 'array',
      of: [{
        type: 'object',
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
          question: 'Сколько ждать эвакуатор?',
          answer: 'В среднем 20-40 минут. Точное время назовём после получения вашей геолокации.'
        },
        {
          question: 'Как происходит оплата?',
          answer: 'Наличные, карта, перевод. Чек предоставляется. Возможна оплата после доставки.'
        },
        {
          question: 'Что если авто не на ходу?',
          answer: 'Укажите это в заявке — приедет платформа с лебёдкой или манипулятор.'
        },
        {
          question: 'Работаете с юрлицами?',
          answer: 'Да, предоставляем договор, акты, работаем с НДС.'
        },
        {
          question: 'Работаете ли вы ночью и в праздники?',
          answer: 'Да, круглосуточно и без выходных — 365 дней в году.'
        },
        {
          question: 'Можно ли отследить эвакуатор?',
          answer: 'Да, через Telegram-бот вы получите ссылку для отслеживания местоположения экипажа.'
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
          { name: 'label', title: 'Название ссылки', type: 'string' },
          { 
            name: 'section', 
            title: 'На какую секцию ведёт', 
            type: 'string',
            options: {
              list: [
                { title: 'Услуги', value: 'services' },
                { title: 'Цены', value: 'pricing' },
                { title: 'Как это работает', value: 'how' },
                { title: 'Зона работы', value: 'zone' },
                { title: 'Контакты', value: 'contacts' },
                { title: 'FAQ', value: 'faq' }
              ]
            }
          }
        ],
        preview: {
          select: { title: 'label', subtitle: 'section' }
        }
      }],
      initialValue: [
        { label: 'Услуги', section: 'services' },
        { label: 'Цены', section: 'pricing' },
        { label: 'Зона работы', section: 'zone' },
        { label: 'Контакты', section: 'contacts' },
        { label: 'FAQ', section: 'faq' }
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
    },
    {
      name: 'socialLinks',
      title: 'Социальные сети и контакты',
      type: 'object',
      fields: [
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
        { 
          name: 'phoneNumber', 
          title: 'Номер телефона', 
          type: 'string',
          initialValue: '+7-921-431-2020'
        }
      ]
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
