import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const STORAGE_KEY = 'juicylucy_user_v1';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = ({ email, password }) => {
    // Local auth mock
    const stored = JSON.parse(localStorage.getItem('juicylucy_users_v1') || '[]');
    const matched = stored.find((u) => u.email === email && u.password === password);
    if (!matched) {
      throw new Error('Credenciales inválidas');
    }
    setUser({ name: matched.name, email: matched.email });
  };

  const register = ({ name, email, password }) => {
    const trimmedName = name.trim();
    if (!trimmedName || !email || !password) {
      throw new Error('Completa todos los campos');
    }
    const stored = JSON.parse(localStorage.getItem('juicylucy_users_v1') || '[]');
    if (stored.some((u) => u.email === email)) {
      throw new Error('El email ya está registrado');
    }
    const next = [...stored, { name: trimmedName, email, password }];
    localStorage.setItem('juicylucy_users_v1', JSON.stringify(next));
    setUser({ name: trimmedName, email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
