import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Settings2 } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageHero from '../components/ui/PageHero';
import {
  MANUFACTURERS,
  SHOWROOM_VEHICLES,
  VEHICLE_TYPES,
  filterVehicles,
  formatNaira,
} from '../data/vehicles';

const ShowroomPage = () => {
  const [searchParams] = useSearchParams();

  const filters = useMemo(
    () => ({
      type: searchParams.get('type') ?? undefined,
      manufacturer: searchParams.get('manufacturer') ?? undefined,
      model: searchParams.get('model') ?? undefined,
      transmission: searchParams.get('transmission') ?? undefined,
      mileage: searchParams.get('mileage') ?? undefined,
      keywords: searchParams.get('keywords') ?? undefined,
      min: searchParams.get('min') ?? undefined,
      max: searchParams.get('max') ?? undefined,
    }),
    [searchParams],
  );

  const results = useMemo(() => filterVehicles(SHOWROOM_VEHICLES, filters), [filters]);

  const hasFilters = Object.values(filters).some(Boolean);

  const labelFor = (options: { value: string; label: string }[], value?: string) =>
    options.find((o) => o.value === value)?.label;

  return (
    <>
      <PageHero
        eyebrow="Showroom"
        title="Find your next vehicle"
        description="Browse our current selection of passenger cars, SUVs, and commercial vehicles. Refine your search or speak with our sales team."
        backgroundImage="/images/IMG_3553.jpg"
      />

      <AnimatedSection className="section-pad bg-surface">
        <div className="container-tm">
          {hasFilters && (
            <div className="mb-8 flex flex-wrap gap-2">
              {filters.type && (
                <FilterTag label={labelFor(VEHICLE_TYPES, filters.type) ?? filters.type} />
              )}
              {filters.manufacturer && (
                <FilterTag label={labelFor(MANUFACTURERS, filters.manufacturer) ?? filters.manufacturer} />
              )}
              {filters.model && <FilterTag label={filters.model} />}
              {filters.transmission && <FilterTag label={filters.transmission} />}
              {filters.keywords && <FilterTag label={`"${filters.keywords}"`} />}
              {(filters.min || filters.max) && (
                <FilterTag
                  label={`${formatNaira(Number(filters.min ?? 0))} – ${formatNaira(Number(filters.max ?? 300_000_000))}`}
                />
              )}
            </div>
          )}

          {results.length === 0 ? (
            <div className="rounded-2xl border border-navy/10 bg-white p-12 text-center shadow-card">
              <h2 className="text-2xl font-heading font-bold text-navy">No vehicles match your search</h2>
              <p className="mx-auto mt-3 max-w-md text-muted">
                Try adjusting your filters or contact our sales team — we regularly update our showroom inventory.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/" className="btn-outline">
                  Back to search
                </Link>
                <Link to="/contact" className="btn-primary">
                  Contact sales
                </Link>
              </div>
            </div>
          ) : (
            <>
              <p className="mb-8 text-muted">
                Showing <strong className="text-navy">{results.length}</strong> vehicle
                {results.length !== 1 ? 's' : ''}
                {hasFilters ? ' matching your criteria' : ''}
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((vehicle, index) => (
                  <motion.article
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-navy-dark/5">
                      <img
                        src={vehicle.image}
                        alt={vehicle.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {labelFor(MANUFACTURERS, vehicle.manufacturer)} · {vehicle.year}
                      </p>
                      <h3 className="mt-1 text-xl font-heading font-semibold text-navy">{vehicle.title}</h3>
                      <p className="mt-2 text-lg font-bold text-navy">{formatNaira(vehicle.price)}</p>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Gauge className="h-4 w-4 text-accent" />
                          {vehicle.mileage.toLocaleString()} km
                        </span>
                        <span className="inline-flex items-center gap-1.5 capitalize">
                          <Settings2 className="h-4 w-4 text-accent" />
                          {vehicle.transmission}
                        </span>
                      </div>

                      <Link
                        to="/quote"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
                      >
                        Enquire about this vehicle
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </AnimatedSection>
    </>
  );
};

const FilterTag = ({ label }: { label: string }) => (
  <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy">{label}</span>
);

export default ShowroomPage;
