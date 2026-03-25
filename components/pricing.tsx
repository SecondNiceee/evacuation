const plans = [
  {
    name: "Легковой",
    price: "От 2 500 ₽",
    features: [
      "Авто до 2,5 т",
      "Городская эвакуация",
      "Подача от 20 мин",
      "Фотоотчёт в чат",
    ],
    cta: "Заказать в Telegram",
    href: "https://t.me/your_bot",
    highlight: false,
  },
  {
    name: "Грузовой",
    price: "От 4 500 ₽",
    features: [
      "До 10 т, манипулятор",
      "Низкорамная платформа",
      "Междугородние рейсы",
      "GPS-трекинг",
    ],
    cta: "Заказать в Telegram",
    href: "https://t.me/your_bot",
    highlight: true,
  },
  {
    name: "Сложный случай",
    price: "Индивидуальный расчёт",
    features: [
      "ДТП, кювет, сугроб",
      "Работа со страховой",
      "Кран-манипулятор",
      "Приоритетный выезд",
    ],
    cta: "Обсудить во VK",
    href: "https://vk.com/your_group",
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Тарифы
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground mb-3 text-balance">
            Прозрачные тарифы — без сюрпризов
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Все цены включают подачу, погрузку и первые 10 км.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-mono font-bold text-foreground text-xl mb-2">{plan.name}</h3>
                <p
                  className="font-bold text-2xl"
                  style={{ color: "oklch(0.78 0.18 70)" }}
                >
                  {plan.price}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground border border-border hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Точная стоимость зависит от адреса, типа авто и сложности. Итоговая цена фиксируется в чате до начала работ.
        </p>
      </div>
    </section>
  )
}
