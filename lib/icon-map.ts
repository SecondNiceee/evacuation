import {
  Clock,
  MapPin,
  Bot,
  Phone,
  Star,
  Heart,
  Shield,
  Check,
  Car,
  Truck,
  AlertTriangle,
  Route,
  Wrench,
  MessageSquare,
  DollarSign,
  FileText,
  Calculator,
  type LucideIcon
} from "lucide-react"

// Map Russian icon names to Lucide components
export const iconMap: Record<string, LucideIcon> = {
  // Hero badges
  'Часы': Clock,
  'Метка на карте': MapPin,
  'Робот': Bot,
  'Телефон': Phone,
  'Звезда': Star,
  'Сердце': Heart,
  'Щит': Shield,
  'Галочка': Check,
  
  // Services
  'Легковой автомобиль': Car,
  'Грузовик': Truck,
  'Предупреждение': AlertTriangle,
  'Маршрут': Route,
  'Ключ': Wrench,
  
  // Benefits
  'Сообщение': MessageSquare,
  'Доллар': DollarSign,
  'Гаечный ключ': Wrench,
  
  // Steps
  'Документ': FileText,
  'Калькулятор': Calculator,
  
  // Legacy English names (fallback for existing data)
  'clock': Clock,
  'mapPin': MapPin,
  'bot': Bot,
  'car': Car,
  'truck': Truck,
  'alertTriangle': AlertTriangle,
  'route': Route,
  'messageSquare': MessageSquare,
  'dollarSign': DollarSign,
  'shield': Shield,
  'wrench': Wrench,
  'fileText': FileText,
  'calculator': Calculator,
}

// Get icon component by Russian or English name
export function getIcon(name: string, fallback: LucideIcon = Star): LucideIcon {
  return iconMap[name] || fallback
}
