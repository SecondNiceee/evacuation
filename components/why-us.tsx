import { MessageSquare, DollarSign, Shield, Wrench } from "lucide-react"

const benefits = [
  {
    icon: MessageSquare,
    title: "Удобный заказ",
    description:
      "Никаких колл-центров — напишите в VK, Max или создайте заявку через Telegram-бота.",
  },
  {
    icon: DollarSign,
    title: "Честная цена",
    description: "Фикс в момент заказа, без «накруток на месте». Итоговая цена фиксируется до выезда.",
  },
  {
    icon: Shield,
    title: "Ответственность",
    description: "Договор, фотофиксация авто до погрузки, страховка груза на весь маршрут.",
  },
  {
    icon: Wrench,
    title: "Опыт",
    description: "Водители со стажем 5+ лет, спецоснащение для сложных случаев и ДТП.",
  },
]

export function WhyUs() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Почему мы
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-balance">
            Мы сохраним ваши нервы и время
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
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
