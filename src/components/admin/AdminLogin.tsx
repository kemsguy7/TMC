import { Lock } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useAdminAuth } from '../../context/AdminAuthProvider';

const AdminLogin = () => {
  const { login } = useAdminAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ok = login(password);
    if (!ok) {
      setError('Incorrect password. Please try again.');
      return;
    }
    setError('');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="w-full max-w-md rounded-2xl border border-navy/10 bg-white p-10 shadow-card">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
          <Lock className="h-5 w-5" />
        </div>

        <h1 className="font-heading text-2xl font-semibold text-navy">Admin sign in</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Manage showroom inventory. Vehicles are stored locally for now and will sync to a database
          later.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="admin-password" className="mb-2 block text-sm font-medium text-navy">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/20"
              placeholder="Enter admin password"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="text-sm text-accent">{error}</p>}

          <button type="submit" className="btn-primary w-full">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
