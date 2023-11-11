import { createContext } from 'react';

// Contexto de autenticación.
export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {}
});

// Contexto para el tema (oscuro o claro).
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});
