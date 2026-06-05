import { motion } from 'framer-motion';
import { useState } from 'react';
import type { GalleryItem } from '../../data/site';
import GalleryLightbox, { ZoomIn } from './GalleryLightbox';

const spanClass = (span: GalleryItem['span']) => {
  if (span === 'wide') return 'md:col-span-2 md:row-span-1';
  if (span === 'tall') return 'md:row-span-2';
  return '';
};

type Props = {
  items: GalleryItem[];
  showFilters?: boolean;
};

const CATEGORIES = ['All', 'Inspection', 'Workshop', 'Training', 'Fleet'];

const BentoGallery = ({ items, showFilters = true }: Props) => {
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    filter === 'All' ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-accent text-white shadow-glow'
                  : 'bg-white text-navy border border-navy/10 hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-4 md:gap-5">
        {filtered.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.title}`}
            className={`group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover text-left cursor-zoom-in ${spanClass(item.span)}`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90">
              <ZoomIn className="h-5 w-5" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 pointer-events-none">
              <span className="inline-block mb-2 px-2.5 py-0.5 rounded text-[0.65rem] font-bold uppercase tracking-wider bg-accent text-white">
                {item.category}
              </span>
              <h3 className="text-white font-heading font-semibold text-lg md:text-xl">{item.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>

      <GalleryLightbox
        items={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
};

export default BentoGallery;
