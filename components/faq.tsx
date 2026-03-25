"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Сколько ждать эвакуатор?",
    a: "В среднем 20-40 минут. Точное время назовём после получения вашей геолокации.",
  },
  {
    q: "Как происходит оплата?",
    a: "Наличные, карта, перевод. Чек предоставляется. Возможна оплата после доставки.",
  },
  {
    q: "Что если авто не на ходу?",
    a: "Укажите это в заявке — приедет платформа с лебёдкой или манипулятор.",
  },
  {
    q: "Работаете с юрлицами?",
    a: "Да, предоставляем договор, акты, работаем с НДС.",
  },
  {
    q: "Работаете ли вы ночью и в праздники?",
    a: "Да, круглосуточно и без выходных — 365 дней в году.",
  },
  {
    q: "Можно ли отследить эвакуатор?",
    a: "Да, через Telegram-бот вы получите ссылку для отслеживания местоположения экипажа.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-balance">
            Ответы на частые вопросы
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-foreground">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ml-4 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
