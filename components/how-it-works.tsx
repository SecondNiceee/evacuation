import { FileText, Calculator, Truck } from "lucide-react"

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Заявка",
    description:
      "Оставьте заявку с подробностями: марка авто, место, проблема. Telegram-бот или мессенджер.",
  },
  {
    num: "02",
    icon: Calculator,
    title: "Расчёт и подтверждение",
    description:
      "Оператор называет точную цену и время подачи. Фиксируем заказ — без сюрпризов.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Подача и эвакуация",
    description:
      "Экипаж прибывает, аккуратно грузит, доставляет в нужную точку. Фотоотчёт в чат.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Как работаем
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-balance">
            3 шага до эвакуации
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%_-_1rem)] w-8 h-px bg-primary/30 z-10" />
                )}
                <div className="bg-card rounded-2xl border border-border p-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="font-mono font-bold text-4xl leading-none"
                      style={{ color: "oklch(0.65 0.22 240 / 0.25)" }}
                    >
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-mono font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Notice */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 flex gap-4">
          <span className="text-2xl shrink-0">⚠️</span>
          <div>
            <p className="font-semibold text-foreground mb-1">Важно знать</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Если авто после ДТП — не пытайтесь заводить его. Пришлите фото повреждений в чат —
              мы подберём нужный тип платформы и согласуем работу со страховой.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
