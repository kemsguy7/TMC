import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Vehicle, VehicleInput } from '../data/vehicles';
import { vehicleRepository } from '../services/vehicleRepository';

type VehicleContextValue = {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  addVehicle: (input: VehicleInput) => Promise<Vehicle>;
  updateVehicle: (id: string, input: VehicleInput) => Promise<Vehicle>;
  deleteVehicle: (id: string) => Promise<void>;
  resetToDefaults: () => Promise<void>;
};

const VehicleContext = createContext<VehicleContextValue | null>(null);

export const VehicleProvider = ({ children }: { children: ReactNode }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await vehicleRepository.getAll();
      setVehicles(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load vehicles');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const addVehicle = useCallback(async (input: VehicleInput) => {
    const vehicle = await vehicleRepository.create(input);
    setVehicles((prev) => [...prev, vehicle]);
    return vehicle;
  }, []);

  const updateVehicle = useCallback(async (id: string, input: VehicleInput) => {
    const vehicle = await vehicleRepository.update(id, input);
    setVehicles((prev) => prev.map((v) => (v.id === id ? vehicle : v)));
    return vehicle;
  }, []);

  const deleteVehicle = useCallback(async (id: string) => {
    await vehicleRepository.delete(id);
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  }, []);

  const resetToDefaults = useCallback(async () => {
    const data = await vehicleRepository.resetToDefaults();
    setVehicles(data);
  }, []);

  const value = useMemo(
    () => ({
      vehicles,
      loading,
      error,
      refresh,
      addVehicle,
      updateVehicle,
      deleteVehicle,
      resetToDefaults,
    }),
    [vehicles, loading, error, refresh, addVehicle, updateVehicle, deleteVehicle, resetToDefaults],
  );

  return <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>;
};

export const useVehicles = () => {
  const ctx = useContext(VehicleContext);
  if (!ctx) throw new Error('useVehicles must be used within VehicleProvider');
  return ctx;
};
