import BentoGallery from '../components/gallery/BentoGallery';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import { GALLERY_ITEMS } from '../data/site';

const GalleryPage = () => (
  <>
    <PageHero
      eyebrow="Gallery"
      title="See our work in action"
      description="Fleet projects, facilities, training programs, and professional services across Nigeria."
    />
    <AnimatedSection className="section-pad">
      <div className="container-tm">
        <BentoGallery items={GALLERY_ITEMS} />
      </div>
    </AnimatedSection>
  </>
);

export default GalleryPage;
