import { type ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => (
  <div className="min-h-screen bg-surface">
    <Outlet />
  </div>
);

export const AdminShell = ({ children }: { children: ReactNode }) => (
  <>
    <header className="border-b border-navy/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/images/truck-masters-logo.png" alt="Truckmasters" className="h-9 w-auto" />
          </Link>
          <span className="hidden text-sm font-medium text-muted sm:inline">Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/showroom"
            className="text-sm font-medium text-navy transition-colors hover:text-accent"
          >
            View showroom
          </Link>
        </div>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
  </>
);

export default AdminLayout;
