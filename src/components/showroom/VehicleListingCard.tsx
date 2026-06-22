import { ArrowRight, Gauge, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatNaira, type Vehicle } from '../../data/vehicles';
import type { ViewMode } from './ShowroomToolbar';
import { VehiclePhotoBadge } from './ShowroomToolbar';

type VehicleListingCardProps = {
  vehicle: Vehicle;
  view: ViewMode;
};

const VehicleListingCard = ({ vehicle, view }: VehicleListingCardProps) => {
  const priceLabel = vehicle.priceOnRequest ? 'NGN Please call us' : formatNaira(vehicle.price);

  if (view === 'list') {
    return (
      <article className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white shadow-card transition-shadow hover:shadow-card-hover sm:flex-row">
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-navy/5 sm:w-72 sm:aspect-auto">
          <img
            src={vehicle.image}
            alt={vehicle.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:min-h-[180px]"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6">
          <div className="flex items-center justify-between gap-3">
            <VehiclePhotoBadge count={vehicle.photoCount} />
            <p className="text-sm font-semibold text-accent">{priceLabel}</p>
          </div>
          <h3 className="mt-3 font-heading text-xl font-semibold text-navy">{vehicle.title}</h3>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Gauge className="h-4 w-4 text-navy/40" />
              {vehicle.mileage.toLocaleString()} km
            </span>
            <span className="inline-flex items-center gap-1.5 capitalize">
              <Settings2 className="h-4 w-4 text-navy/40" />
              {vehicle.transmission}
            </span>
            <span>{vehicle.year}</span>
          </div>
          <Link
            to="/quote"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Enquire now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-xl border border-navy/10 bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-navy/5 p-5">
        <div className="flex items-center justify-between gap-2">
          <VehiclePhotoBadge count={vehicle.photoCount} />
          <p className="text-sm font-semibold text-accent">{priceLabel}</p>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-navy">{vehicle.title}</h3>
        <Link
          to="/quote"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy/50 transition-colors hover:text-accent"
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
};

export default VehicleListingCard;
