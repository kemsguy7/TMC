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
      className="text-center px-2 py-2 sm:px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
        {label}
      </p>
      <p className="text-2xl font-heading font-semibold text-white sm:text-3xl md:text-4xl">
        {display.toLocaleString()}
        {suffix}
      </p>
    </motion.div>
  );
};

export default AnimatedCounter;
