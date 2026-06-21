import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { GALLERY_ITEMS, SERVICES } from '../../data/site';
import HeroCollage from './HeroCollage';
import HeroStatsStrip from './HeroStatsStrip';
import VehicleSearchForm from './VehicleSearchForm';

const collageImages = GALLERY_ITEMS.slice(0, 3);

const HeroSection = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (slug: string) => {
    if (!slug) return;
    navigate(`/services#${slug}`);
  };

  return (
    <section className="relative bg-navy-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: 'url(/images/Background12.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark to-[#141d26]" />
      </div>

      <div className="relative z-10">
        {/* Main hero */}
        <div className="container-tm">
          <div className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-10rem)]">
            {/* Vehicle search — desktop sidebar */}
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden w-full shrink-0 border-r border-white/[0.06] lg:block lg:w-[340px] xl:w-[380px]"
            >
              <div className="sticky top-24 px-8 py-16 xl:px-10 xl:py-20">
                <VehicleSearchForm />
              </div>
            </motion.aside>

            {/* Welcome + imagery */}
            <div className="flex flex-1 flex-col justify-center px-0 py-14 sm:py-16 lg:py-20 lg:pl-16 xl:pl-24">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/40">
                  Automotive Therapy
                </p>

                <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  Welcome to
                  <br />
                  <span className="text-white/90">Truck Masters</span>
                </h1>

                <p className="mt-8 text-base leading-[1.8] text-white/55 sm:text-lg sm:leading-[1.85]">
                  Nigeria&apos;s trusted partner for vehicle sales, expert servicing, and fleet
                  support — serving individual drivers and corporate organisations nationwide.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link to="/quote" className="btn-primary">
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                  >
                    View all services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Services — understated */}
                <div className="mt-14 border-t border-white/[0.08] pt-10">
                  <label
                    htmlFor="hero-service-select"
                    className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40"
                  >
                    Browse by service
                  </label>
                  <div className="relative max-w-sm">
                    <select
                      id="hero-service-select"
                      defaultValue=""
                      onChange={(e) => handleServiceSelect(e.target.value)}
                      className="w-full appearance-none border-b border-white/20 bg-transparent py-3 pr-8 text-sm text-white/80 transition-colors focus:border-white/40 focus:outline-none"
                    >
                      <option value="" disabled className="text-navy">
                        Select a service
                      </option>
                      {SERVICES.map((service) => (
                        <option key={service.slug} value={service.slug} className="text-navy">
                          {service.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  </div>
                </div>
              </motion.div>

              {/* Editorial imagery */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-16 w-full max-w-2xl lg:mt-20"
              >
                <HeroCollage images={collageImages} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet search — own spacious band */}
        <div className="border-t border-white/[0.06] bg-[#141d26] lg:hidden">
          <div className="container-tm px-4 py-14 sm:py-16">
            <VehicleSearchForm />
          </div>
        </div>

        <HeroStatsStrip />
      </div>
    </section>
  );
};

export default HeroSection;
