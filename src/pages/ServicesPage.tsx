import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/site';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceIcon from '../components/ui/ServiceIcon';

const ServicesPage = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="Everything your vehicles need"
      description="From retail sales and health checks to fleet consultancy and mobile workshops."
      backgroundImage="/images/workshop-equipment.jpg"
    />
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-tm">
        <SectionHeading
          title="Our full service catalogue"
          description="Professional automotive therapy — one partner for retail customers, fleet operators, and nationwide excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 6 }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-navy/5 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-accent mb-5">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/quote" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </AnimatedSection>
  </>
);

export default ServicesPage;
