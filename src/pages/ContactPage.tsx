import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/site';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';

const cards = [
  { icon: Phone, label: 'Sales', value: CONTACT.sales, href: `tel:${CONTACT.sales.replace(/\s/g, '')}` },
  { icon: Phone, label: 'Service', value: CONTACT.service, href: `tel:${CONTACT.service.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: 'Address', value: CONTACT.address, href: CONTACT.mapsUrl },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri 9am–6:30pm · Sat 9am–5:30pm', href: undefined },
];

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Visit our showroom & workshop"
      description="Our team in Ikeja, Lagos is ready to assist with all your automotive needs."
    />
    <AnimatedSection className="section-pad">
      <div className="container-tm">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 h-full"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{card.label}</p>
                <p className="text-navy font-medium text-sm leading-relaxed">{card.value}</p>
              </motion.div>
            );
            return card.href ? (
              <a key={card.label} href={card.href} target={card.label === 'Address' ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <div key={card.label}>{inner}</div>
            );
          })}
        </div>
        <div className="text-center">
          <Link to="/quote" className="btn-primary">
            Get a Quote
          </Link>
        </div>
      </div>
    </AnimatedSection>
  </>
);

export default ContactPage;
