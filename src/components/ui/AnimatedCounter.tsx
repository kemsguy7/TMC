import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
};

const AnimatedCounter = ({ value, suffix = '', label, delay = 0 }: Props) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.3 + delay,
    });
    return controls.stop;
  }, [motionValue, value, delay]);

  useEffect(() => {
    const unsub = rounded.on('change', setDisplay);
    return unsub;
  }, [rounded]);

  return (
    <motion.div
      className="text-center px-4 py-6 md:border-r md:border-white/20 last:md:border-r-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <p className="text-xs md:text-sm font-medium text-white/70 uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-3xl md:text-4xl font-heading font-bold text-white">
        {display.toLocaleString()}
        {suffix}
      </p>
    </motion.div>
  );
};

export default AnimatedCounter;
