import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const NationwideSection = () => (
  <AnimatedSection className="section-pad relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{ backgroundImage: 'url(/images/truck-lineup.jpg)' }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
    <div className="container-tm relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Nationwide Coverage</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-navy leading-tight">
            Workshops & service partners across Nigeria
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            We run a network of workshops and aftersales outlets / Service partners in Lagos and in 31 states
            in Nigeria.
          </p>
          <div className="mt-8 flex items-start gap-4 p-6 rounded-2xl bg-surface border border-navy/5">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-navy">Headquarters — Lagos</p>
              <p className="text-muted text-sm mt-1">
                Largest multi-brand workshop facility with computerized body and paint booth.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]"
        >
          <img
            src="/images/workshop-equipment.jpg"
            alt="Truckmasters workshop facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-heading font-bold text-2xl">31 States</p>
            <p className="text-white/80 text-sm">Including FCT — comprehensive automotive support</p>
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default NationwideSection;
