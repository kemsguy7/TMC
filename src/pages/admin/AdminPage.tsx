import { LogOut, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import AdminLogin from '../../components/admin/AdminLogin';
import VehicleAdminForm from '../../components/admin/VehicleAdminForm';
import VehicleAdminList from '../../components/admin/VehicleAdminList';
import { AdminShell } from '../../components/layout/AdminLayout';
import { useAdminAuth } from '../../context/AdminAuthProvider';
import { useVehicles } from '../../context/VehicleProvider';
import type { Vehicle, VehicleInput } from '../../data/vehicles';

const AdminPage = () => {
  const { isAuthenticated, logout } = useAdminAuth();
  const { vehicles, addVehicle, updateVehicle, deleteVehicle, resetToDefaults } = useVehicles();
  const [editing, setEditing] = useState<Vehicle | null>(null);
  const [creating, setCreating] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isAuthenticated) return <AdminLogin />;

  const showForm = creating || editing;

  const handleCreate = async (input: VehicleInput) => {
    setSubmitting(true);
    try {
      await addVehicle(input);
      setCreating(false);
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async (input: VehicleInput) => {
    if (!editing) return;
    setSubmitting(true);
    try {
      await updateVehicle(editing.id, input);
      setEditing(null);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Remove this vehicle from the showroom?')) return;
    await deleteVehicle(id);
    if (editing?.id === id) setEditing(null);
  };

  const handleReset = async () => {
    if (!window.confirm('Reset inventory to default sample vehicles? This cannot be undone.')) return;
    await resetToDefaults();
    setEditing(null);
    setCreating(false);
  };

  const closeForm = () => {
    setCreating(false);
    setEditing(null);
  };

  return (
    <AdminShell>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">Showroom</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold text-navy">Manage inventory</h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Add, edit, or remove vehicles. Data is saved in your browser for now — ready to connect to a
            database when available.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={handleReset} className="btn-outline !text-xs">
            <RotateCcw className="h-4 w-4" />
            Reset defaults
          </button>
          <button type="button" onClick={logout} className="btn-outline !text-xs">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <VehicleAdminList
          vehicles={vehicles}
          onAdd={() => {
            setEditing(null);
            setCreating(true);
          }}
          onEdit={(vehicle) => {
            setCreating(false);
            setEditing(vehicle);
          }}
          onDelete={handleDelete}
        />

        {showForm ? (
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8 lg:sticky lg:top-8">
            <VehicleAdminForm
              vehicle={editing}
              onSubmit={editing ? handleUpdate : handleCreate}
              onCancel={closeForm}
              submitting={submitting}
            />
          </div>
        ) : (
          <div className="hidden rounded-2xl border border-dashed border-navy/15 bg-white/50 p-12 text-center lg:flex lg:items-center lg:justify-center">
            <p className="text-muted">Select a vehicle to edit, or add a new listing.</p>
          </div>
        )}
      </div>
    </AdminShell>
  );
};

export default AdminPage;
