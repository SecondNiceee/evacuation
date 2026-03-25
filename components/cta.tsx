import { Truck } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <Truck className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-mono font-bold text-3xl md:text-5xl text-foreground mb-4 text-balance">
          Не теряйте время — эвакуатор уже может быть в пути
        </h2>
        <p className="text-muted-foreground text-lg mb-10 text-pretty max-w-2xl mx-auto">
          Напишите сейчас в Telegram, VK или Max — закрепим за вами ближайший экипаж и зафиксируем цену.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://t.me/your_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
            </svg>
            Заказать в Telegram
          </a>
          <a
            href="https://vk.com/your_group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-foreground border border-border px-8 py-4 rounded-xl font-bold text-base hover:bg-secondary/80 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.101-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.101-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.101.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.169-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
            </svg>
            Написать во VK
          </a>
          <a
            href="https://max.ru/your_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-foreground border border-border px-8 py-4 rounded-xl font-bold text-base hover:bg-secondary/80 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 7.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5zm-7 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5zm3.5 6.5c-2.21 0-4-1.343-4-3h8c0 1.657-1.79 3-4 3z" />
            </svg>
            Написать в Max
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Truck className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-mono font-bold text-foreground">
            Эвак<span className="text-primary">СПб</span>
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          Санкт-Петербург — круглосуточно, 24/7
        </p>
        <div className="flex items-center gap-4">
          <a href="https://t.me/your_bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Telegram
          </a>
          <a href="https://vk.com/your_group" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            VK
          </a>
        </div>
      </div>
    </footer>
  )
}
