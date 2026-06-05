import BrandsStrip from '../components/home/BrandsStrip';
import ClientsSection from '../components/home/ClientsSection';
import GalleryPreview from '../components/home/GalleryPreview';
import HeroSection from '../components/home/HeroSection';
import NationwideSection from '../components/home/NationwideSection';
import ServicesPreview from '../components/home/ServicesPreview';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/site';

const HomePage = () => (
  <>
    <HeroSection />
    <ServicesPreview />
    <NationwideSection />
    <BrandsStrip />
    <GalleryPreview />
    <ClientsSection />
    <AnimatedSection className="section-pad bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/commercial-truck-1.jpg)' }}
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="container-tm relative text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Ready for automotive peace of mind?
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Get a tailored quote for workshop services, fleet support, or vehicle sales.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/quote" className="btn-primary">
            Get a Quote
          </Link>
          <a href={`tel:${CONTACT.sales.replace(/\s/g, '')}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy">
            Call {CONTACT.sales}
          </a>
        </div>
      </div>
    </AnimatedSection>
  </>
);

export default HomePage;
