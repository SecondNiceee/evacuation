import Image from "next/image"
import { MapPin } from "lucide-react"

const areas = [
  "Все районы СПб: от Курортного до Колпино",
  "Кольцевые трассы: КАД, ЗСД, Мурманское, Киевское шоссе",
  "Ленинградская область: до 100 км — без наценок",
  "Междугород: рассчитаем маршрут под ваш бюджет",
]

export function Zone() {
  return (
    <section id="zone" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Зона работы
            </p>
            <h2 className="font-mono font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
              Работаем по всему Санкт-Петербургу и Ленобласти
            </h2>

            <ul className="flex flex-col gap-4 mb-8">
              {areas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{area}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 flex gap-3">
              <span className="text-xl">📍</span>
              <p className="text-sm text-foreground leading-relaxed">
                Отправьте геолокацию в чате Telegram — покажем, сколько минут до вас едет ближайший экипаж.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/spb-city.jpg"
              alt="Санкт-Петербург ночью"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/20" />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur rounded-xl border border-border p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">Ближайший экипаж</p>
                <p className="text-muted-foreground text-xs">Среднее время подачи: 20-40 мин</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Свободен</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
