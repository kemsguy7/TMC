import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../../data/site';
import BentoGallery from '../gallery/BentoGallery';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const GalleryPreview = () => (
  <AnimatedSection className="section-pad bg-surface" id="gallery">
    <div className="container-tm">
      <SectionHeading
        eyebrow="Gallery"
        title="See our work in action"
        description="Facilities, showroom, fleet projects, training, and workshop operations across Nigeria."
      />
      <BentoGallery items={GALLERY_ITEMS.slice(0, 6)} showFilters={false} />
      <div className="text-center mt-12">
        <Link to="/gallery" className="btn-outline">
          Full Gallery
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </AnimatedSection>
);

export default GalleryPreview;
