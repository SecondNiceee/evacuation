"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useFaqSection } from "@/hooks/use-sanity"

// Default data (fallback)
const defaultSection = {
  sectionLabel: "FAQ",
  sectionTitle: "Ответы на частые вопросы",
  items: [
    {
      question: "Сколько ждать эвакуатор?",
      answer: "В среднем 20-40 минут. Точное время назовём после получения вашей геолокации.",
    },
    {
      question: "Как происходит оплата?",
      answer: "Наличные, карта, перевод. Чек предоставляется. Возможна оплата после доставки.",
    },
    {
      question: "Что если авто не на ходу?",
      answer: "Укажите это в заявке — приедет платформа с лебёдкой или манипулятор.",
    },
    {
      question: "Работаете с юрлицами?",
      answer: "Да, предоставляем договор, акты, работаем с НДС.",
    },
    {
      question: "Работаете ли вы ночью и в праздники?",
      answer: "Да, круглосуточно и без выходных — 365 дней в году.",
    },
    {
      question: "Можно ли отследить эвакуатор?",
      answer: "Да, через Telegram-бот вы получите ссылку для отслеживания местоположения экипажа.",
    },
  ]
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { data } = useFaqSection()
  const section = data || defaultSection
  const faqs = section.items || defaultSection.items

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {section.sectionLabel || defaultSection.sectionLabel}
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-balance">
            {section.sectionTitle || defaultSection.sectionTitle}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={item._key || i}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-foreground">{item.question}</span>
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
                    {item.answer}
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
