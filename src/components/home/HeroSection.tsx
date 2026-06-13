import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../ui/AnimatedCounter';
import { STATS } from '../../data/site';

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center blur-[4px]"
        style={{ backgroundImage: 'url(/images/Background12.jpg)' }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/88 to-navy/75" />

    <motion.div
      className="absolute top-20 right-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-accent/25 blur-3xl"
      animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/10 blur-2xl"
      animate={{ scale: [1, 0.85, 1], y: [0, -20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="container-tm relative z-10 pt-8 pb-20 md:pb-28">
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white/90 border border-white/30 bg-white/10 backdrop-blur-sm"
        >
          Automotive Therapy
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span className="block" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
            WE SELL
          </motion.span>
          <motion.span
            className="block text-accent-light mt-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
          >
            PEACE OF MIND
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          Nigeria&apos;s trusted partner for retail vehicle sales, workshop services, and fleet support — from
          individual drivers to corporate organisations across passenger and commercial vehicles.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
        >
          <Link to="/quote" className="btn-primary">
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all">
            Our Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 md:mt-20 max-w-4xl rounded-2xl border border-white/20 bg-navy-dark/60 backdrop-blur-md p-2 md:p-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
