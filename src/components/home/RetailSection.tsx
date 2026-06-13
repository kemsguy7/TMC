import { motion } from 'framer-motion';
import { ArrowRight, Car, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';

const RetailSection = () => (
  <AnimatedSection className="section-pad bg-surface overflow-hidden">
    <div className="container-tm">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Retail & Corporate</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-navy leading-tight">
            Trusted by individual drivers and Nigeria&apos;s leading fleets
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Whether you are buying your next car, maintaining a family vehicle, or managing a nationwide fleet,
            Truckmasters delivers the same peace of mind — honest advice, certified technicians, and transparent service.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-navy/8 bg-white p-5 shadow-card">
              <Car className="h-6 w-6 text-accent mb-3" />
              <h3 className="font-heading font-semibold text-navy mb-2">Retail Customers</h3>
              <p className="text-sm text-muted leading-relaxed">
                New and used vehicle sales, servicing, health checks, and refurbishment for everyday drivers.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/8 bg-white p-5 shadow-card">
              <Users className="h-6 w-6 text-accent mb-3" />
              <h3 className="font-heading font-semibold text-navy mb-2">Fleet Operators</h3>
              <p className="text-sm text-muted leading-relaxed">
                Inspection, consultancy, mobile workshops, and nationwide support for corporate fleets.
              </p>
            </div>
          </div>

          <Link to="/services" className="btn-primary mt-8 inline-flex">
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
        >
          <img
            src="/images/IMG_3553.jpg"
            alt="Truckmasters showroom and retail vehicle display"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-heading font-bold text-2xl">Showroom & Sales</p>
            <p className="text-white/80 text-sm mt-1">Quality vehicles and expert guidance for every customer</p>
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

export default RetailSection;
