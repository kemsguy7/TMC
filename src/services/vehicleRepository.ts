import { DEFAULT_SHOWROOM_VEHICLES, type Vehicle, type VehicleInput } from '../data/vehicles';

const STORAGE_KEY = 'tm_showroom_vehicles';

/**
 * Persistence layer for showroom inventory.
 * Swap LocalVehicleRepository for an API-backed implementation when the database is ready.
 */
export interface VehicleRepository {
  getAll(): Promise<Vehicle[]>;
  create(input: VehicleInput): Promise<Vehicle>;
  update(id: string, input: VehicleInput): Promise<Vehicle>;
  delete(id: string): Promise<void>;
  resetToDefaults(): Promise<Vehicle[]>;
}

const readStorage = (): Vehicle[] | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Vehicle[];
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

const writeStorage = (vehicles: Vehicle[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
};

const createId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `v-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export class LocalVehicleRepository implements VehicleRepository {
  async getAll(): Promise<Vehicle[]> {
    const stored = readStorage();
    if (stored) return stored;
    writeStorage(DEFAULT_SHOWROOM_VEHICLES);
    return [...DEFAULT_SHOWROOM_VEHICLES];
  }

  async create(input: VehicleInput): Promise<Vehicle> {
    const vehicles = await this.getAll();
    const vehicle: Vehicle = { ...input, id: createId() };
    const next = [...vehicles, vehicle];
    writeStorage(next);
    return vehicle;
  }

  async update(id: string, input: VehicleInput): Promise<Vehicle> {
    const vehicles = await this.getAll();
    const index = vehicles.findIndex((v) => v.id === id);
    if (index === -1) throw new Error('Vehicle not found');
    const vehicle: Vehicle = { ...input, id };
    const next = [...vehicles];
    next[index] = vehicle;
    writeStorage(next);
    return vehicle;
  }

  async delete(id: string): Promise<void> {
    const vehicles = await this.getAll();
    const next = vehicles.filter((v) => v.id !== id);
    if (next.length === vehicles.length) throw new Error('Vehicle not found');
    writeStorage(next);
  }

  async resetToDefaults(): Promise<Vehicle[]> {
    writeStorage(DEFAULT_SHOWROOM_VEHICLES);
    return [...DEFAULT_SHOWROOM_VEHICLES];
  }
}

/** Replace with `new ApiVehicleRepository()` when backend is available */
export const vehicleRepository: VehicleRepository = new LocalVehicleRepository();
