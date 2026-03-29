import { Phone, Clock, Bot } from "lucide-react"
import { type SanityContactsSection } from "@/lib/sanity"

// Platform icons
const platformIcons = {
  telegram: (
    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
    </svg>
  ),
  vk: (
    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.101-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.101-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.101.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.169-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
    </svg>
  ),
  max: (
    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 7.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5zm-7 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5zm3.5 6.5c-2.21 0-4-1.343-4-3h8c0 1.657-1.79 3-4 3z" />
    </svg>
  ),
}

// Default data (fallback)
const defaultContacts = [
  {
    platform: "telegram" as const,
    title: "Telegram",
    description: "Основной канал заказа. Telegram-бот: расчёт стоимости, отслеживание, история заказов.",
    url: "https://t.me/your_bot",
  },
  {
    platform: "vk" as const,
    title: "ВКонтакте",
    description: "Альтернативный канал связи. Здесь же — отзывы клиентов.",
    url: "https://vk.com/your_group",
  },
  {
    platform: "max" as const,
    title: "Max",
    description: "Напишите в Max — удобный мессенджер от Mail.ru для быстрого заказа.",
    url: "https://max.ru/your_profile",
  },
]

const defaultContactsSection = {
  sectionTitle: "Контакты",
  sectionSubtitle: "Свяжитесь удобным способом",
  responseTime: "Отвечаем за 2-3 минуты",
  phone: "+7 (XXX) XXX-XX-XX (резерв)",
  schedule: "Режим: 24/7, без выходных",
  botFeature: "Telegram-бот: автоматический расчёт стоимости",
  contacts: defaultContacts,
}

const ctaTextMap = {
  telegram: "Открыть чат →",
  vk: "Написать сообществу →",
  max: "Написать в Max →",
}

interface ContactsProps {
  data: SanityContactsSection | null
}

export function Contacts({ data }: ContactsProps) {
  const section = data || defaultContactsSection
  const contacts = section.contacts && section.contacts.length > 0 ? section.contacts : defaultContacts

  return (
    <section id="contacts" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {section.sectionTitle}
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-balance">
            {section.sectionSubtitle}
          </h2>
          <p className="text-muted-foreground mt-3">{section.responseTime}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {contacts.map((contact, index) => (
            <a
              key={contact._key || index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-background p-8 flex flex-col gap-4 hover:border-primary/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                {platformIcons[contact.platform]}
              </div>
              <div>
                <h3 className="font-mono font-bold text-foreground text-lg mb-1">{contact.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {contact.description}
                </p>
                <span className="text-primary text-sm font-semibold group-hover:underline">
                  {ctaTextMap[contact.platform] || "Открыть →"}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Extra details */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>{section.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{section.schedule}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-primary" />
            <span>{section.botFeature}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
