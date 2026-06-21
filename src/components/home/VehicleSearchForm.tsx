import { ChevronDown, Search } from 'lucide-react';
import { useMemo, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MANUFACTURERS,
  MILEAGE_OPTIONS,
  MODELS_BY_MANUFACTURER,
  PRICE_INCREMENTS,
  TRANSMISSIONS,
  VEHICLE_TYPES,
} from '../../data/vehicles';
import PriceRangeSlider from './PriceRangeSlider';

const VehicleSearchForm = ({ className = '' }: { className?: string }) => {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [mileage, setMileage] = useState('');
  const [keywords, setKeywords] = useState('');
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(PRICE_INCREMENTS.length - 1);

  const models = useMemo(() => {
    if (!manufacturer) return [];
    return MODELS_BY_MANUFACTURER[manufacturer] ?? [];
  }, [manufacturer]);

  const handleManufacturerChange = (value: string) => {
    setManufacturer(value);
    setModel('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (vehicleType) params.set('type', vehicleType);
    if (manufacturer) params.set('manufacturer', manufacturer);
    if (model) params.set('model', model);
    if (transmission) params.set('transmission', transmission);
    if (mileage) params.set('mileage', mileage);
    if (keywords.trim()) params.set('keywords', keywords.trim());
    params.set('min', String(PRICE_INCREMENTS[minIndex]));
    params.set('max', String(PRICE_INCREMENTS[maxIndex]));
    navigate(`/showroom?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
            Showroom
          </p>
          <h2 className="mt-2 font-heading text-xl font-semibold text-white md:text-2xl">
            Find your next vehicle
          </h2>
        </header>

        <div className="space-y-4">
          <SelectField
            value={vehicleType}
            onChange={setVehicleType}
            options={VEHICLE_TYPES}
            ariaLabel="Vehicle type"
          />
          <SelectField
            value={manufacturer}
            onChange={handleManufacturerChange}
            options={MANUFACTURERS}
            ariaLabel="Manufacturer"
          />
          <SelectField
            value={model}
            onChange={setModel}
            options={[{ value: '', label: 'All Models' }, ...models]}
            ariaLabel="Model"
            disabled={!manufacturer}
          />
          <SelectField
            value={transmission}
            onChange={setTransmission}
            options={TRANSMISSIONS}
            ariaLabel="Transmission"
          />
          <SelectField
            value={mileage}
            onChange={setMileage}
            options={MILEAGE_OPTIONS}
            ariaLabel="Mileage"
          />
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Keywords, e.g. TDi Sport"
            className={inputClass}
          />
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <PriceRangeSlider
            minIndex={minIndex}
            maxIndex={maxIndex}
            onChange={(min, max) => {
              setMinIndex(min);
              setMaxIndex(max);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn-primary mt-10 w-full !rounded-lg !py-4 text-xs font-semibold uppercase tracking-[0.18em]"
        >
          <Search className="h-4 w-4" />
          Search vehicles
        </button>
      </div>
    </form>
  );
};

const inputClass =
  'w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/60 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20';

const selectClass =
  'w-full appearance-none rounded-lg border border-white/10 bg-white px-4 py-3 pr-10 text-sm text-navy transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20';

type SelectFieldProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  ariaLabel: string;
  disabled?: boolean;
};

const SelectField = ({ value, onChange, options, ariaLabel, disabled }: SelectFieldProps) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${selectClass} ${disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'}`}
    >
      {options.map((opt) => (
        <option key={opt.value || 'all'} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
  </div>
);

export default VehicleSearchForm;
