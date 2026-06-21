import { motion } from 'framer-motion';
import type { GalleryItem } from '../../data/site';

type HeroCollageProps = {
  images: GalleryItem[];
};

const HeroCollage = ({ images }: HeroCollageProps) => {
  const [featured, ...rest] = images;

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="overflow-hidden rounded-2xl"
      >
        <img
          src={featured.src}
          alt={featured.title}
          className="aspect-[16/10] w-full object-cover"
        />
      </motion.div>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-5">
        {rest.slice(0, 2).map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={item.src}
              alt={item.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroCollage;
