import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/site';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import ServiceIcon from '../ui/ServiceIcon';

const ServicesPreview = () => (
  <AnimatedSection className="section-pad bg-surface" id="services">
    <div className="container-tm">
      <SectionHeading
        eyebrow="What We Offer"
        title="Complete Automotive Solutions"
        description="From electricals and body work to fleet consultancy and mobile workshops — one partner for your entire fleet."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.slice(0, 6).map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-card p-8 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
              <ServiceIcon name={service.icon} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-navy mb-3">{service.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="btn-primary">
          View All Services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </AnimatedSection>
);

export default ServicesPreview;
