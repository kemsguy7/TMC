import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ShowroomContact from '../components/showroom/ShowroomContact';
import ShowroomToolbar, { type ViewMode } from '../components/showroom/ShowroomToolbar';
import VehicleListingCard from '../components/showroom/VehicleListingCard';
import VehicleSearchForm from '../components/showroom/VehicleSearchForm';
import { useVehicles } from '../context/VehicleProvider';
import {
  filterVehicles,
  paginateVehicles,
  sortVehicles,
  type SortOption,
  type VehicleSearchParams,
} from '../data/vehicles';

const parseFilters = (searchParams: URLSearchParams): VehicleSearchParams => ({
  type: searchParams.get('type') ?? undefined,
  manufacturer: searchParams.get('manufacturer') ?? undefined,
  model: searchParams.get('model') ?? undefined,
  transmission: searchParams.get('transmission') ?? undefined,
  mileage: searchParams.get('mileage') ?? undefined,
  keywords: searchParams.get('keywords') ?? undefined,
  min: searchParams.get('min') ?? undefined,
  max: searchParams.get('max') ?? undefined,
});

const ShowroomPage = () => {
  const { vehicles, loading } = useVehicles();
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState<SortOption>('price-asc');
  const [perPage, setPerPage] = useState(9);
  const [view, setView] = useState<ViewMode>('grid');
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filters = useMemo(() => parseFilters(searchParams), [searchParams]);

  const filtered = useMemo(() => filterVehicles(vehicles, filters), [vehicles, filters]);
  const sorted = useMemo(() => sortVehicles(filtered, sort), [filtered, sort]);
  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  const paginated = useMemo(
    () => paginateVehicles(sorted, page, perPage),
    [sorted, page, perPage],
  );

  useEffect(() => {
    setPage(1);
  }, [searchParams, sort, perPage]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <div className="flex min-h-screen flex-col bg-surface lg:flex-row">
      {/* Sidebar — desktop */}
      <aside className="hidden shrink-0 border-r border-white/[0.06] bg-navy-dark lg:block lg:w-[360px] xl:w-[380px]">
        <div className="sticky top-[4.5rem] max-h-[calc(100vh-4.5rem)] overflow-y-auto px-8 py-12 xl:px-10">
          <VehicleSearchForm syncFromUrl submitLabel="Find your next vehicle" />
          <ShowroomContact />
        </div>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1">
        {/* Mobile filter toggle */}
        <div className="border-b border-navy/10 bg-white px-4 py-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg border border-navy/10 bg-surface px-4 py-3 text-sm font-semibold text-navy"
          >
            <span>Vehicle search & filters</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform ${mobileFiltersOpen ? 'rotate-90' : ''}`}
            />
          </button>
        </div>

        {mobileFiltersOpen && (
          <div className="border-b border-white/[0.06] bg-navy-dark px-6 py-10 lg:hidden">
            <VehicleSearchForm syncFromUrl showHeader={false} submitLabel="Find your next vehicle" />
            <ShowroomContact />
          </div>
        )}

        <div className="px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
          <header className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">Inventory</p>
            <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">Showroom</h1>
          </header>

          <ShowroomToolbar
            total={sorted.length}
            sort={sort}
            perPage={perPage}
            view={view}
            onSortChange={setSort}
            onPerPageChange={setPerPage}
            onViewChange={setView}
          />

          {loading ? (
            <div className="mt-12 rounded-2xl border border-navy/10 bg-white px-8 py-16 text-center shadow-card">
              <p className="text-muted">Loading showroom inventory…</p>
            </div>
          ) : sorted.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-navy/10 bg-white px-8 py-16 text-center shadow-card">
              <h2 className="font-heading text-2xl font-semibold text-navy">No vehicles found</h2>
              <p className="mx-auto mt-3 max-w-md text-muted leading-relaxed">
                Adjust your filters or contact our sales team — we update our showroom regularly.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Contact sales
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div
                className={`mt-10 ${
                  view === 'grid'
                    ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'
                    : 'flex flex-col gap-5'
                }`}
              >
                {paginated.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                  >
                    <VehicleListingCard vehicle={vehicle} view={view} />
                  </motion.div>
                ))}
              </div>

              {totalPages > 1 && (
                <nav
                  className="mt-14 flex items-center justify-center gap-2"
                  aria-label="Pagination"
                >
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 bg-white text-navy transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={`flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors ${
                        page === n
                          ? 'border-navy bg-navy text-white'
                          : 'border-navy/10 bg-white text-navy hover:bg-surface'
                      }`}
                    >
                      {n}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 bg-white text-navy transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </nav>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ShowroomPage;
