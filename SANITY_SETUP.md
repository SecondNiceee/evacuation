# Sanity CMS Integration Guide

## ✅ Setup Complete

Ваш сайт теперь полностью контролируется через Sanity админку с клиентской загрузкой данных.

## 🔧 Конфигурация

### 1. Создать Sanity проект
```bash
npx sanity@latest init
```

### 2. Переменные окружения
Добавьте в ваш `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=ваш_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Что управляется через Sanity?
- **Navigation** - меню навигации
- **Hero Section** - главное изображение и текст
- **Services** - услуги и описания
- **Why Us** - преимущества компании
- **How It Works** - процесс работы
- **Pricing** - ценовые планы
- **FAQ** - часто задаваемые вопросы
- **Zone Info** - информация о зонах
- **Contacts** - контактная информация
- **Footer** - информация в подвале

## 📋 Структура Sanity схем

Все схемы находятся в `/sanity/schemas/index.ts`. Они включают:
- `navigation` - меню
- `hero` - главный баннер
- `service` - услуги
- `whyUs` - почему мы
- `howItWorks` - как это работает
- `pricingPlan` - планы цен
- `faqItem` - FAQ
- `zoneInfo` - зоны
- `contact` - контакты
- `settings` - общие настройки

## 🎨 Типы данных

### Hero Section
```typescript
{
  title: string
  subtitle: string
  image: image
  cta: string // CTA кнопка текст
  ctaLink: string
}
```

### Services
```typescript
{
  name: string
  description: string
  icon: string
  features: string[]
}
```

### Pricing Plans
```typescript
{
  name: string
  price: number
  description: string
  features: string[]
  highlighted: boolean
}
```

## 🚀 Как это работает

1. **Клиентская загрузка**: Данные загружаются с клиента через `@sanity/client`
2. **SWR кеширование**: Используется SWR для кеширования и синхронизации
3. **Статический экспорт**: С `output: 'export'` сайт генерируется как статический HTML
4. **Realtime обновления**: При изменении в Sanity данные обновляются на сайте

## 📝 Использование в компонентах

Все компоненты используют хуки из `/hooks/use-sanity.ts`:

```typescript
import { useSanityData } from '@/hooks/use-sanity'

export default function MyComponent() {
  const { data, isLoading } = useSanityData('hero')
  
  if (isLoading) return <div>Загрузка...</div>
  return <div>{data?.title}</div>
}
```

## 🔌 Санity Client

Клиент находится в `/lib/sanity.ts` и настроен для:
- CORS запросов с клиента
- Кеширования ответов
- Обработки ошибок

## 📦 Зависимости

```json
{
  "@sanity/client": "^6.21.0",
  "@sanity/image-url": "^1.0.2",
  "swr": "^2.0.0"
}
```

## ✨ Особенности

✅ Полная интеграция Sanity  
✅ Клиентская загрузка данных  
✅ SWR для кеширования  
✅ Поддержка `output: 'export'`  
✅ Все компоненты переведены на Sanity  
✅ Типизация TypeScript  

## 📚 Структура файлов

```
/lib
  └── sanity.ts          # Sanity client конфиг
/hooks
  └── use-sanity.ts      # SWR хуки для загрузки данных
/sanity
  └── schemas
      └── index.ts       # Все Sanity схемы
/components
  └── *.tsx              # Компоненты с Sanity интеграцией
```

## 🎯 Следующие шаги

1. Создайте Sanity проект на sanity.io
2. Добавьте `NEXT_PUBLIC_SANITY_PROJECT_ID` и `NEXT_PUBLIC_SANITY_DATASET`
3. Деплойте ваше приложение
4. Все изменения в Sanity админке будут автоматически отражаться на сайте
