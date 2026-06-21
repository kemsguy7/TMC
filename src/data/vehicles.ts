export const VEHICLE_TYPES = [
  { value: '', label: 'All Types' },
  { value: 'car', label: 'Cars' },
  { value: 'suv', label: 'SUV' },
  { value: 'truck', label: 'Trucks & Commercial' },
];

export const MANUFACTURERS = [
  { value: '', label: 'All Manufacturers' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'honda', label: 'Honda' },
  { value: 'kia', label: 'Kia' },
  { value: 'isuzu', label: 'Isuzu' },
  { value: 'ford', label: 'Ford' },
  { value: 'mercedes', label: 'Mercedes-Benz' },
];

export const MODELS_BY_MANUFACTURER: Record<string, { value: string; label: string }[]> = {
  hyundai: [
    { value: 'elantra', label: 'Elantra' },
    { value: 'sonata', label: 'Sonata' },
    { value: 'tucson', label: 'Tucson' },
    { value: 'santa-fe', label: 'Santa Fe' },
    { value: 'creta', label: 'Creta' },
  ],
  toyota: [
    { value: 'corolla', label: 'Corolla' },
    { value: 'camry', label: 'Camry' },
    { value: 'rav4', label: 'RAV4' },
    { value: 'hilux', label: 'Hilux' },
    { value: 'hiace', label: 'HiAce' },
  ],
  honda: [
    { value: 'accord', label: 'Accord' },
    { value: 'civic', label: 'Civic' },
    { value: 'cr-v', label: 'CR-V' },
    { value: 'pilot', label: 'Pilot' },
  ],
  kia: [
    { value: 'sportage', label: 'Sportage' },
    { value: 'sorento', label: 'Sorento' },
    { value: 'cerato', label: 'Cerato' },
  ],
  isuzu: [
    { value: 'd-max', label: 'D-Max' },
    { value: 'npr', label: 'NPR' },
    { value: 'frr', label: 'FRR' },
  ],
  ford: [
    { value: 'ranger', label: 'Ranger' },
    { value: 'transit', label: 'Transit' },
  ],
  mercedes: [
    { value: 'c-class', label: 'C-Class' },
    { value: 'e-class', label: 'E-Class' },
    { value: 'sprinter', label: 'Sprinter' },
  ],
};

export const TRANSMISSIONS = [
  { value: '', label: 'All Transmissions' },
  { value: 'manual', label: 'Manual' },
  { value: 'auto', label: 'Automatic' },
];

export const MILEAGE_OPTIONS = [
  { value: '', label: 'All Mileage' },
  { value: '5000', label: 'Up to 5,000 km' },
  { value: '10000', label: 'Up to 10,000 km' },
  { value: '20000', label: 'Up to 20,000 km' },
  { value: '40000', label: 'Up to 40,000 km' },
  { value: '60000', label: 'Up to 60,000 km' },
  { value: '80000', label: 'Up to 80,000 km' },
  { value: '100000', label: 'Up to 100,000 km' },
  { value: '100001', label: 'Over 100,000 km' },
];

export const PRICE_INCREMENTS = [
  0,
  500_000, 1_000_000, 2_000_000, 3_000_000, 5_000_000,
  7_500_000, 10_000_000, 12_500_000, 15_000_000, 17_500_000, 20_000_000,
  25_000_000, 30_000_000, 35_000_000, 40_000_000, 50_000_000,
  60_000_000, 75_000_000, 100_000_000, 125_000_000, 150_000_000,
  175_000_000, 200_000_000, 250_000_000, 300_000_000,
];

export const MAX_PRICE = PRICE_INCREMENTS[PRICE_INCREMENTS.length - 1];

export type Vehicle = {
  id: string;
  title: string;
  type: string;
  manufacturer: string;
  model: string;
  transmission: 'manual' | 'auto';
  mileage: number;
  price: number;
  year: number;
  image: string;
  keywords: string;
};

export const SHOWROOM_VEHICLES: Vehicle[] = [
  {
    id: '1',
    title: 'Hyundai Elantra Sport',
    type: 'car',
    manufacturer: 'hyundai',
    model: 'elantra',
    transmission: 'auto',
    mileage: 12000,
    price: 18500000,
    year: 2023,
    image: '/images/hero-slider.jpg',
    keywords: 'sport sedan',
  },
  {
    id: '2',
    title: 'Hyundai Tucson Premium',
    type: 'suv',
    manufacturer: 'hyundai',
    model: 'tucson',
    transmission: 'auto',
    mileage: 8500,
    price: 32000000,
    year: 2024,
    image: '/images/IMG_3553.jpg',
    keywords: 'suv premium',
  },
  {
    id: '3',
    title: 'Toyota Corolla LE',
    type: 'car',
    manufacturer: 'toyota',
    model: 'corolla',
    transmission: 'auto',
    mileage: 22000,
    price: 15800000,
    year: 2022,
    image: '/images/hero-background.jpg',
    keywords: 'corolla sedan',
  },
  {
    id: '4',
    title: 'Toyota Hilux Double Cab',
    type: 'truck',
    manufacturer: 'toyota',
    model: 'hilux',
    transmission: 'manual',
    mileage: 45000,
    price: 28500000,
    year: 2021,
    image: '/images/commercial-truck-1.jpg',
    keywords: 'pickup commercial',
  },
  {
    id: '5',
    title: 'Honda CR-V Touring',
    type: 'suv',
    manufacturer: 'honda',
    model: 'cr-v',
    transmission: 'auto',
    mileage: 18000,
    price: 29500000,
    year: 2023,
    image: '/images/Background12.jpg',
    keywords: 'crv touring',
  },
  {
    id: '6',
    title: 'Isuzu D-Max V-Cross',
    type: 'truck',
    manufacturer: 'isuzu',
    model: 'd-max',
    transmission: 'auto',
    mileage: 32000,
    price: 24800000,
    year: 2022,
    image: '/images/flatbed-truck.jpg',
    keywords: 'dmax pickup',
  },
  {
    id: '7',
    title: 'Kia Sportage GT-Line',
    type: 'suv',
    manufacturer: 'kia',
    model: 'sportage',
    transmission: 'auto',
    mileage: 9500,
    price: 27500000,
    year: 2024,
    image: '/images/IMG_3551.jpg',
    keywords: 'sportage gt',
  },
  {
    id: '8',
    title: 'Hyundai Sonata Limited',
    type: 'car',
    manufacturer: 'hyundai',
    model: 'sonata',
    transmission: 'auto',
    mileage: 15000,
    price: 21000000,
    year: 2023,
    image: '/images/vehicle-inspection.jpg',
    keywords: 'sonata limited',
  },
];

export const formatNaira = (amount: number) =>
  `NGN ${amount.toLocaleString('en-NG')}`;

export const formatNairaCompact = (amount: number) => {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000;
    return millions % 1 === 0 ? `NGN ${millions}M` : `NGN ${millions.toFixed(1)}M`;
  }
  if (amount >= 1_000) return `NGN ${(amount / 1_000).toFixed(0)}K`;
  return formatNaira(amount);
};

export type VehicleSearchParams = {
  type?: string;
  manufacturer?: string;
  model?: string;
  transmission?: string;
  mileage?: string;
  keywords?: string;
  min?: string;
  max?: string;
};

export const filterVehicles = (vehicles: Vehicle[], params: VehicleSearchParams) =>
  vehicles.filter((vehicle) => {
    if (params.type && vehicle.type !== params.type) return false;
    if (params.manufacturer && vehicle.manufacturer !== params.manufacturer) return false;
    if (params.model && vehicle.model !== params.model) return false;
    if (params.transmission && vehicle.transmission !== params.transmission) return false;

    if (params.mileage) {
      const maxMileage = Number(params.mileage);
      if (maxMileage === 100001) {
        if (vehicle.mileage <= 100000) return false;
      } else if (vehicle.mileage > maxMileage) {
        return false;
      }
    }

    const minPrice = params.min ? Number(params.min) : 0;
    const maxPrice = params.max ? Number(params.max) : Infinity;
    if (vehicle.price < minPrice || vehicle.price > maxPrice) return false;

    if (params.keywords) {
      const query = params.keywords.toLowerCase();
      const haystack = `${vehicle.title} ${vehicle.keywords}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    return true;
  });
