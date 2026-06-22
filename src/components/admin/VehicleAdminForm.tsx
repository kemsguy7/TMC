import { ImagePlus, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  MANUFACTURERS,
  MODELS_BY_MANUFACTURER,
  VEHICLE_TYPES,
  type Vehicle,
  type VehicleInput,
} from '../../data/vehicles';

const emptyForm = (): VehicleInput => ({
  title: '',
  type: 'car',
  manufacturer: 'hyundai',
  model: '',
  transmission: 'auto',
  mileage: 0,
  price: 0,
  year: new Date().getFullYear(),
  image: '',
  keywords: '',
  photoCount: 1,
  priceOnRequest: false,
});

type VehicleAdminFormProps = {
  vehicle?: Vehicle | null;
  onSubmit: (input: VehicleInput) => Promise<void>;
  onCancel: () => void;
  submitting?: boolean;
};

const fieldClass =
  'w-full rounded-lg border border-navy/10 px-4 py-2.5 text-sm text-navy focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20';

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted';

const VehicleAdminForm = ({ vehicle, onSubmit, onCancel, submitting }: VehicleAdminFormProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<VehicleInput>(vehicle ?? emptyForm());
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    setForm(vehicle ?? emptyForm());
    setImageError('');
  }, [vehicle]);

  const models = useMemo(
    () => MODELS_BY_MANUFACTURER[form.manufacturer] ?? [],
    [form.manufacturer],
  );

  const typeOptions = VEHICLE_TYPES.filter((t) => t.value);
  const manufacturerOptions = MANUFACTURERS.filter((m) => m.value);

  const update = <K extends keyof VehicleInput>(key: K, value: VehicleInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleManufacturerChange = (value: string) => {
    setForm((prev) => ({ ...prev, manufacturer: value, model: '' }));
  };

  const handleImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setImageError('Please select an image file.');
      return;
    }

    if (file.size > 800_000) {
      setImageError('Image is too large. Use a URL or compress below 800KB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        update('image', reader.result);
        setImageError('');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    if (!form.image.trim()) {
      setImageError('Add an image URL or upload a photo.');
      return;
    }
    await onSubmit({
      ...form,
      title: form.title.trim(),
      keywords: form.keywords.trim(),
      price: form.priceOnRequest ? 0 : form.price,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-semibold text-navy">
            {vehicle ? 'Edit vehicle' : 'Add vehicle'}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {vehicle ? 'Update listing details below.' : 'New listing will appear in the showroom.'}
          </p>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-navy"
          aria-label="Close form"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            required
            value={form.title}
            onChange={(e) => update('title', e.target.value)}
            className={fieldClass}
            placeholder="e.g. Hyundai Elantra Sport"
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="type">
            Type
          </label>
          <select
            id="type"
            value={form.type}
            onChange={(e) => update('type', e.target.value)}
            className={fieldClass}
          >
            {typeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="year">
            Year
          </label>
          <input
            id="year"
            type="number"
            min={1990}
            max={2030}
            value={form.year}
            onChange={(e) => update('year', Number(e.target.value))}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="manufacturer">
            Manufacturer
          </label>
          <select
            id="manufacturer"
            value={form.manufacturer}
            onChange={(e) => handleManufacturerChange(e.target.value)}
            className={fieldClass}
          >
            {manufacturerOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="model">
            Model
          </label>
          <select
            id="model"
            value={form.model}
            onChange={(e) => update('model', e.target.value)}
            className={fieldClass}
          >
            <option value="">Select model</option>
            {models.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="transmission">
            Transmission
          </label>
          <select
            id="transmission"
            value={form.transmission}
            onChange={(e) => update('transmission', e.target.value as 'manual' | 'auto')}
            className={fieldClass}
          >
            <option value="auto">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="mileage">
            Mileage (km)
          </label>
          <input
            id="mileage"
            type="number"
            min={0}
            value={form.mileage}
            onChange={(e) => update('mileage', Number(e.target.value))}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="photoCount">
            Photo count
          </label>
          <input
            id="photoCount"
            type="number"
            min={1}
            max={20}
            value={form.photoCount}
            onChange={(e) => update('photoCount', Number(e.target.value))}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={Boolean(form.priceOnRequest)}
              onChange={(e) => update('priceOnRequest', e.target.checked)}
              className="h-4 w-4 rounded border-navy/20 text-accent focus:ring-accent/30"
            />
            <span className="text-sm text-navy">Price on request (display &quot;Please call us&quot;)</span>
          </label>
        </div>

        {!form.priceOnRequest && (
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="price">
              Price (NGN)
            </label>
            <input
              id="price"
              type="number"
              min={0}
              value={form.price}
              onChange={(e) => update('price', Number(e.target.value))}
              className={fieldClass}
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="keywords">
            Keywords
          </label>
          <input
            id="keywords"
            value={form.keywords}
            onChange={(e) => update('keywords', e.target.value)}
            className={fieldClass}
            placeholder="Search terms, e.g. sport sedan"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="image">
            Image URL
          </label>
          <input
            id="image"
            value={form.image.startsWith('data:') ? '' : form.image}
            onChange={(e) => update('image', e.target.value)}
            className={fieldClass}
            placeholder="/images/IMG_3553.jpg"
          />
        </div>

        <div className="sm:col-span-2">
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageFile} />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg border border-dashed border-navy/20 px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-navy/40 hover:bg-surface"
          >
            <ImagePlus className="h-4 w-4" />
            Upload image
          </button>
          {imageError && <p className="mt-2 text-sm text-accent">{imageError}</p>}
          {form.image && (
            <div className="mt-4 overflow-hidden rounded-xl border border-navy/10">
              <img src={form.image} alt="Preview" className="aspect-video w-full object-cover" />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-navy/10 pt-6">
        <button type="submit" disabled={submitting} className="btn-primary">
          {submitting ? 'Saving…' : vehicle ? 'Save changes' : 'Add to showroom'}
        </button>
        <button type="button" onClick={onCancel} className="btn-outline">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default VehicleAdminForm;
