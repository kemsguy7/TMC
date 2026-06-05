import { motion } from 'framer-motion';
import { CLIENTS } from '../../data/site';
import AnimatedCounter from '../ui/AnimatedCounter';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const ClientsSection = () => (
  <AnimatedSection className="section-pad relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
    />
    <div className="absolute inset-0 bg-navy-dark/90" />
    <div className="container-tm relative z-10">
      <SectionHeading
        light
        eyebrow="Trusted Partners"
        title="Clients: 50+ organizations nationwide"
        description="We proudly serve multinational corporations, government agencies, and leading Nigerian companies with professional automotive services."
      />

      <motion.div
        className="mb-14 max-w-xl mx-auto rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <AnimatedCounter value={50} suffix="+" label="Clients" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        {CLIENTS.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm"
          >
            <img
              src={client.src}
              alt={client.name}
              className="h-8 md:h-10 w-auto object-contain brightness-110"
            />
            <p className="mt-3 text-[0.65rem] md:text-xs font-semibold text-white/90 text-center uppercase tracking-wide">
              {client.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ClientsSection;
