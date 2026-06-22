import { Pencil, Plus, Trash2 } from 'lucide-react';
import type { Vehicle } from '../../data/vehicles';
import { formatNaira } from '../../data/vehicles';

type VehicleAdminListProps = {
  vehicles: Vehicle[];
  onAdd: () => void;
  onEdit: (vehicle: Vehicle) => void;
  onDelete: (id: string) => void;
};

const VehicleAdminList = ({ vehicles, onAdd, onEdit, onDelete }: VehicleAdminListProps) => (
  <div>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="font-heading text-xl font-semibold text-navy">Inventory</h2>
        <p className="mt-1 text-sm text-muted">{vehicles.length} vehicles in showroom</p>
      </div>
      <button type="button" onClick={onAdd} className="btn-primary">
        <Plus className="h-4 w-4" />
        Add vehicle
      </button>
    </div>

    {vehicles.length === 0 ? (
      <div className="rounded-xl border border-dashed border-navy/15 bg-surface px-6 py-16 text-center">
        <p className="text-muted">No vehicles yet. Add your first listing.</p>
        <button type="button" onClick={onAdd} className="btn-primary mt-6">
          <Plus className="h-4 w-4" />
          Add vehicle
        </button>
      </div>
    ) : (
      <div className="overflow-hidden rounded-xl border border-navy/10 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-navy/10 bg-surface/80">
                <th className="px-5 py-4 font-semibold text-navy">Vehicle</th>
                <th className="px-5 py-4 font-semibold text-navy">Type</th>
                <th className="px-5 py-4 font-semibold text-navy">Price</th>
                <th className="px-5 py-4 font-semibold text-navy">Year</th>
                <th className="px-5 py-4 text-right font-semibold text-navy">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="border-b border-navy/5 last:border-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={vehicle.image}
                        alt=""
                        className="h-12 w-16 shrink-0 rounded-lg object-cover bg-navy/5"
                      />
                      <span className="font-medium text-navy">{vehicle.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 capitalize text-muted">{vehicle.type}</td>
                  <td className="px-5 py-4 text-muted">
                    {vehicle.priceOnRequest ? 'On request' : formatNaira(vehicle.price)}
                  </td>
                  <td className="px-5 py-4 text-muted">{vehicle.year}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onEdit(vehicle)}
                        className="rounded-lg p-2 text-navy transition-colors hover:bg-surface"
                        aria-label={`Edit ${vehicle.title}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(vehicle.id)}
                        className="rounded-lg p-2 text-accent transition-colors hover:bg-accent/5"
                        aria-label={`Delete ${vehicle.title}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
);

export default VehicleAdminList;
