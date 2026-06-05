import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: 'left' | 'center';
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  align = 'center',
}: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className={`mb-12 md:mb-16 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    {eyebrow && (
      <span
        className={`inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest ${
          light ? 'bg-white/15 text-white/90 border border-white/25' : 'bg-accent/10 text-accent'
        }`}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={`text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight ${
        light ? 'text-white' : 'text-navy'
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-4 text-base md:text-lg leading-relaxed ${
          light ? 'text-white/80' : 'text-muted'
        }`}
      >
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
