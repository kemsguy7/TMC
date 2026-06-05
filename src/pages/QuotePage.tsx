import QuoteForm from '../components/quote/QuoteForm';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';

const QuotePage = () => (
  <>
    <PageHero
      eyebrow="Get a Quote"
      title="Tell us what you need"
      description="Fill in the form below. We'll review your request and get back to you shortly."
      backgroundImage="/images/vehicle-inspection.jpg"
    />
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-tm">
        <QuoteForm />
      </div>
    </AnimatedSection>
  </>
);

export default QuotePage;
