import {
  Activity,
  Car,
  ClipboardCheck,
  Cpu,
  MapPin,
  Package,
  Paintbrush,
  Sparkles,
  Truck,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  zap: Zap,
  wind: Wind,
  sparkles: Sparkles,
  car: Car,
  cpu: Cpu,
  truck: Truck,
  'clipboard-check': ClipboardCheck,
  activity: Activity,
  package: Package,
  'map-pin': MapPin,
  paintbrush: Paintbrush,
};

type Props = { name: string; className?: string };

const ServiceIcon = ({ name, className = 'w-6 h-6' }: Props) => {
  const Icon = ICONS[name] ?? Car;
  return <Icon className={className} aria-hidden />;
};

export default ServiceIcon;
