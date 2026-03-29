import { MessageSquare } from "lucide-react"
import { type SanityBenefitsSection } from "@/lib/sanity"
import { getIcon } from "@/lib/icon-map"

// Default data (fallback)
const defaultSection = {
  sectionLabel: "Почему мы",
  sectionTitle: "Мы сохраним ваши нервы и время",
  items: [
    {
      icon: "Сообщение",
      title: "Удобный заказ",
      description: "Никаких колл-центров — напишите в VK, Max или создайте заявку через Telegram-бота.",
    },
    {
      icon: "Доллар",
      title: "Честная цена",
      description: "Фикс в момент заказа, без «накруток на месте». Итоговая цена фиксируется до выезда.",
    },
    {
      icon: "Щит",
      title: "Ответственность",
      description: "Договор, фотофиксация авто до погрузки, страховка груза на весь маршрут.",
    },
    {
      icon: "Гаечный ключ",
      title: "Опыт",
      description: "Водители со стажем 5+ лет, спецоснащение для сложных случаев и ДТП.",
    },
  ]
}

interface WhyUsProps {
  data: SanityBenefitsSection | null
}

export function WhyUs({ data }: WhyUsProps) {
  const section = data || defaultSection
  const benefits = section.items || defaultSection.items

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {section.sectionLabel || defaultSection.sectionLabel}
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-balance">
            {section.sectionTitle || defaultSection.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, index) => {
            const Icon = getIcon(b.icon, MessageSquare)
            return (
              <div
                key={b._key || index}
                className="bg-background rounded-2xl border border-border p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-mono font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
