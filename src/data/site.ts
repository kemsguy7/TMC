export const CONTACT = {
  sales: '+234 906 755 0214',
  salesAlt: '+234 805 571 4780',
  service: '+234 803 302 1757',
  care: '+234 818 895 3557',
  email: 'truckmasters31@gmail.com',
  salesEmail: 'truckmasters31@gmail.com',
  address: 'No.2 Truckmasters Close, Off Opebi Link Road, Oregun, Ikeja, Lagos, Nigeria',
  mapsUrl: 'https://maps.app.goo.gl/83ZqTHoTMSU9Q4iu9',
  whatsapp: 'https://wa.me/2349067550214',
  hours: 'Mon–Fri 9am–6:30pm · Sat 9am–2pm',
  facebook: 'https://www.facebook.com/truckmasters1',
  instagram: 'https://www.instagram.com/truckmastersng/',
  linkedin: 'https://linkedin.com/company/truckmasters-nigeria-limited/',
};

export const STATS = [
  { label: 'Clients', value: 50, suffix: '+' },
  { label: 'Vehicles Managed', value: 2000, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '+' },
  { label: 'States Covered', value: 31, suffix: '' },
];

export const SERVICES = [
  {
    title: 'Electricals',
    description: 'Expert automotive electrical diagnostics and repairs for passenger and commercial vehicles.',
    icon: 'zap',
  },
  {
    title: 'AC & Body Work',
    description: 'Climate control systems, body repairs, and panel work by certified technicians.',
    icon: 'wind',
  },
  {
    title: 'Vehicle Refurbishment Services',
    description:
      'Comprehensive vehicle refurbishment solutions, including interior restoration, exterior repairs, paint correction, cosmetic enhancements, and component reconditioning to restore vehicles to optimal condition and appearance.',
    icon: 'sparkles',
  },
  {
    title: 'Vehicle Sales',
    description: 'Brand new and certified used cars with warranty support and transparent history.',
    icon: 'car',
  },
  {
    title: 'Vehicle Health Check',
    description:
      'Thorough vehicle health assessments covering engine, electrical, safety, and performance systems — for retail owners and fleet operators alike.',
    icon: 'cpu',
  },
  {
    title: 'Fleet Consultancy',
    description: 'Strategic fleet optimization, cost reduction, and performance enhancement programs.',
    icon: 'truck',
  },
  {
    title: 'Professional Fleet Inspection',
    description: 'Thorough compliance and safety inspections for corporate and commercial fleets.',
    icon: 'clipboard-check',
  },
  {
    title: 'Normal Diagnostics',
    description: 'Routine diagnostic services to keep your vehicles running reliably and efficiently.',
    icon: 'activity',
  },
  {
    title: 'Spare Parts Sales',
    description: 'Genuine OEM and quality aftermarket parts with nationwide availability.',
    icon: 'package',
  },
  {
    title: 'Mobile Workshop',
    description: 'On-site maintenance and emergency support — we come to you when you need us.',
    icon: 'map-pin',
  },
  {
    title: 'Computerized Body & Paint Booth',
    description: 'State-of-the-art body and paint facilities for factory-quality finishes.',
    icon: 'paintbrush',
  },
];

export const BRANDS = [
  { name: 'Isuzu', src: '/images/isuzu.png' },
  { name: 'Toyota', src: '/images/toyota.png' },
  { name: 'Honda', src: '/images/honda.png' },
  { name: 'Hyundai', src: '/images/hyundai.png' },
  { name: 'Kia', src: '/images/kia_logo.jpg' },
  { name: 'Mercedes-Benz', src: '/images/mercedes-benz.png' },
  { name: 'Ford', src: '/images/ford.png' },
];

export const CLIENTS = [
  { name: 'Promasidor', src: '/images/promasidor_logo.png' },
  { name: 'Mantrac Nigeria', src: '/images/mantrac_logo_v1.png' },
  { name: 'Fan Milk PLC', src: '/images/fnmilk_logo.png' },
  { name: 'Bemil', src: '/images/bemil-logo1.png' },
  { name: 'Tetra Pak', src: '/images/tetrapack_logo.png' },
  { name: 'Spectranet', src: '/images/Spectranet_logo.png' },
  { name: 'Autocheck', src: '/images/AUTOCHECK_LOGO.png' },
  { name: 'Ultimum Beverages', src: '/images/ultimum_limited_logo.jpg' },
  { name: 'West African Gas', src: '/images/WAGPCOlogo-70x68-1.png' },
];

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: string;
  span: 'tall' | 'wide' | 'normal';
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    src: '/images/vehicle-inspection.jpg',
    title: 'Comprehensive Vehicle Inspection',
    category: 'Inspection',
    span: 'wide',
  },
  {
    id: '2',
    src: '/images/workshop-equipment.jpg',
    title: 'State-of-the-Art Workshop',
    category: 'Workshop',
    span: 'tall',
  },
  {
    id: '3',
    src: '/images/commercial-truck-1.jpg',
    title: 'Commercial Truck Certification',
    category: 'Inspection',
    span: 'normal',
  },
  {
    id: '4',
    src: '/images/hero-background.jpg',
    title: 'Professional Maintenance',
    category: 'Workshop',
    span: 'normal',
  },
  {
    id: '5',
    src: '/images/diesel-engine-training.jpg',
    title: 'Technical Training',
    category: 'Training',
    span: 'tall',
  },
  {
    id: '6',
    src: '/images/truck-lineup.jpg',
    title: 'Fleet Management',
    category: 'Fleet',
    span: 'wide',
  },
  {
    id: '7',
    src: '/images/truck-fleet-main.jpg',
    title: 'Commercial Fleet Operations',
    category: 'Fleet',
    span: 'normal',
  },
  {
    id: '8',
    src: '/images/flatbed-truck.jpg',
    title: 'Specialized Vehicle Services',
    category: 'Fleet',
    span: 'normal',
  },
  {
    id: '9',
    src: '/images/Background12.jpg',
    title: 'Showroom & Vehicle Display',
    category: 'Workshop',
    span: 'wide',
  },
  {
    id: '10',
    src: '/images/IMG_3551.jpg',
    title: 'Showroom Experience',
    category: 'Workshop',
    span: 'normal',
  },
  {
    id: '11',
    src: '/images/IMG_3553.jpg',
    title: 'Retail Vehicle Sales',
    category: 'Workshop',
    span: 'tall',
  },
];
