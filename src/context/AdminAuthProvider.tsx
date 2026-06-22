import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

const SESSION_KEY = 'tm_admin_authenticated';
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD ?? 'truckmasters';

type AdminAuthContextValue = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true',
  );

  const login = useCallback((password: string) => {
    if (password !== ADMIN_PASSWORD) return false;
    sessionStorage.setItem(SESSION_KEY, 'true');
    setIsAuthenticated(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout],
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
};
