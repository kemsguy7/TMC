import { motion } from 'framer-motion';
import { BRANDS } from '../../data/site';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const BrandsStrip = () => (
  <AnimatedSection className="section-pad bg-white">
    <div className="container-tm">
      <SectionHeading
        eyebrow="Multi-Brand Support"
        title="Equipped for every major brand"
        description="Our Lagos facility services passenger and commercial vehicles from leading manufacturers."
      />
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
        {BRANDS.map((brand, index) => (
          <motion.img
            key={brand.name}
            src={brand.src}
            alt={brand.name}
            className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ scale: 1.12 }}
          />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default BrandsStrip;
