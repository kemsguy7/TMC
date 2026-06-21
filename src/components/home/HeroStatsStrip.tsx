import { STATS } from '../../data/site';
import AnimatedCounter from '../ui/AnimatedCounter';

const HeroStatsStrip = () => (
  <div className="border-t border-white/10 bg-navy-dark/80">
    <div className="container-tm py-10 md:py-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        {STATS.map((stat, i) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={i * 0.08}
          />
        ))}
      </div>
    </div>
  </div>
);

export default HeroStatsStrip;
