import Image from "next/image"
import { Car } from "lucide-react"
import { urlFor, type SanityServicesSection } from "@/lib/sanity"
import { getIcon } from "@/lib/icon-map"

// Default data (fallback)
const defaultSection = {
  sectionLabel: "Услуги",
  sectionTitle: "Эвакуируем спецтехнику под ваши задачи",
  items: [
    {
      icon: "Легковой автомобиль",
      title: "Легковые автомобили",
      description: "До 2,5 тонн. Аккуратная погрузка, фиксация колёс, страховка груза.",
      price: "От 2 500 ₽",
      image: "/images/service-sedan.jpg",
      orderUrl: "https://t.me/evacuator31bot",
    },
    {
      icon: "Грузовик",
      title: "Грузовые и микроавтобусы",
      description: "До 10 тонн. Манипуляторы, низкорамные платформы, работа с негабаритом.",
      price: "От 4 500 ₽",
      image: "/images/service-truck.jpg",
      orderUrl: "https://t.me/evacuator31bot",
    },
    {
      icon: "Предупреждение",
      title: "После ДТП и сложные случаи",
      description: "Вытаскиваем из кювета, сугробов, парковок. Работаем со страховыми.",
      price: "Расчёт индивидуально",
      image: "/images/service-crash.jpg",
      orderUrl: "https://t.me/evacuator31bot",
    },
    {
      icon: "Маршрут",
      title: "Междугородняя эвакуация",
      description: "Доставка по Белгородской области и РФ. Прозрачный тариф за км.",
      price: "От 50 ₽/км",
      image: "/images/hero-tow.jpg",
      orderUrl: "https://t.me/evacuator31bot",
    },
  ]
}

interface ServicesProps {
  data: SanityServicesSection | null
}

export function Services({ data }: ServicesProps) {
  const section = data || defaultSection
  const services = section.items || defaultSection.items

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {section.sectionLabel || defaultSection.sectionLabel}
          </p>
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground text-balance">
            {section.sectionTitle || defaultSection.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, index) => {
            const Icon = getIcon(s.icon, Car)
            const imageUrl = s.image 
              ? (typeof s.image === 'string' ? s.image : urlFor(s.image).url())
              : "/images/hero-tow.jpg"
            return (
              <div
                key={s._key || index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/50" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold text-base"
                      style={{ color: "oklch(0.78 0.18 70)" }}
                    >
                      {s.price}
                    </span>
                    <a
                      href={s.orderUrl || "https://t.me/evacuator31bot"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Заказать →
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
