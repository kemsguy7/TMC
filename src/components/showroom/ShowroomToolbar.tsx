import { Camera, LayoutGrid, List } from 'lucide-react';
import type { SortOption } from '../../data/vehicles';

export type ViewMode = 'grid' | 'list';
export type { SortOption };

type ShowroomToolbarProps = {
  total: number;
  sort: SortOption;
  perPage: number;
  view: ViewMode;
  onSortChange: (sort: SortOption) => void;
  onPerPageChange: (perPage: number) => void;
  onViewChange: (view: ViewMode) => void;
};

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'price-asc', label: 'Price — low to high' },
  { value: 'price-desc', label: 'Price — high to low' },
  { value: 'year-desc', label: 'Newest first' },
  { value: 'mileage-asc', label: 'Lowest mileage' },
];

const PER_PAGE_OPTIONS = [6, 9, 12, 24];

const ShowroomToolbar = ({
  total,
  sort,
  perPage,
  view,
  onSortChange,
  onPerPageChange,
  onViewChange,
}: ShowroomToolbarProps) => (
  <div className="flex flex-col gap-5 border-b border-navy/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="text-sm text-muted">
        <span className="font-semibold text-navy">{total}</span> vehicle{total !== 1 ? 's' : ''} available
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      <label className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">Order by</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="min-w-[160px] rounded-lg border border-navy/10 bg-white px-3 py-2 text-sm text-navy focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">Per page</span>
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
          className="min-w-[72px] rounded-lg border border-navy/10 bg-white px-3 py-2 text-sm text-navy focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20"
        >
          {PER_PAGE_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">View</span>
        <div className="flex overflow-hidden rounded-lg border border-navy/10">
          <button
            type="button"
            onClick={() => onViewChange('grid')}
            aria-label="Grid view"
            className={`flex h-9 w-9 items-center justify-center transition-colors ${
              view === 'grid' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-surface'
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onViewChange('list')}
            aria-label="List view"
            className={`flex h-9 w-9 items-center justify-center border-l border-navy/10 transition-colors ${
              view === 'list' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-surface'
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ShowroomToolbar;

export const VehiclePhotoBadge = ({ count }: { count: number }) => (
  <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
    <Camera className="h-3.5 w-3.5" />
    {count}
  </span>
);
