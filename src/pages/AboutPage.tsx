import { motion } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';

const AboutPage = () => (
  <>
    <PageHero
      eyebrow="About Us"
      title="Nigeria's largest multi-brand vehicle workshop"
      description="Serving retail customers and corporate fleets since 2013 — with a focus on quality, transparency, and peace of mind."
    />
    <AnimatedSection className="section-pad">
      <div className="container-tm max-w-4xl">
        <SectionHeading
          align="left"
          title="Who we are"
          description="Truckmasters Nigeria Limited stands as one of Nigeria's largest multi-brand vehicle workshops. We support individual car owners and corporate organisations with sales, servicing, diagnostics, and fleet solutions nationwide."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-3xl shadow-card-hover"
        >
          <img
            src="/images/Background12.jpg"
            alt="Truckmasters showroom with Hyundai vehicles on display"
            className="aspect-[21/9] w-full object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Industry Leadership',
              text: 'Operating since 2013, we deliver trusted automotive care for retail customers and fleet operators across Nigeria.',
            },
            {
              title: 'Multi-Brand Excellence',
              text: 'Our Lagos facility is equipped for Isuzu, Toyota, Honda, Hyundai, Kia, Mercedes, Ford and more.',
            },
            {
              title: 'Nationwide Coverage',
              text: 'We run a network of workshops and aftersales outlets / Service partners in Lagos and in 31 states in Nigeria.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 border-l-4 border-l-accent"
            >
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </>
);

export default AboutPage;
