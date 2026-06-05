import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
};

const PageHero = ({ eyebrow, title, description, backgroundImage = '/images/hero-background.jpg' }: Props) => (
  <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-end overflow-hidden pt-28 pb-16 md:pb-20">
    <div
      className="absolute inset-0 bg-cover bg-center scale-105"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/70" />
    <motion.div
      className="absolute top-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full bg-accent/20 blur-3xl"
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <div className="container-tm relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        {eyebrow && (
          <span className="inline-block mb-4 text-accent font-semibold text-sm uppercase tracking-widest">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">{description}</p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
