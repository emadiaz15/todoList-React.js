// Imports de React y React Router
import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Imports de páginas
import HomePage from './pages/Home';
import TodosPage from './pages/Todos';
import LoginPage from "./pages/Login";
import ContactPage from "./pages/Contact";
import NotFoundPage from './pages/NotFound';


// Imports de MUI y contextos
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { AuthContext, ThemeContext } from "./components/Contexts";

function App() {
    // Determinar si el sistema del usuario prefiere el modo oscuro
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // Estado para controlar el modo oscuro
    const [darkMode, setDarkMode] = useState(prefersDarkMode);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    // Crear el tema basado en el estado de darkMode
    const theme = useMemo(
        () => createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } }),
        [darkMode]
    );

    // Estado para controlar la autenticación del usuario
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem("isAuthenticated") === "true";
    });

    return (
        <>
            {/* Proveedor de contexto de autenticación */}
            <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
                {/* Proveedor de contexto de tema */}
                <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
                    {/* Proveedor de tema de MUI */}
                    <ThemeProvider theme={theme}>
                        {/* Reseteo de estilos CSS */}
                        <CssBaseline />
                        {/* Enrutador */}
                        <BrowserRouter>
                            <Routes>
                                <Route
                                    path="/"
                                    element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
                                />
                                <Route
                                    path="/contact"
                                    element={isAuthenticated ? <ContactPage /> : <Navigate to="/login" replace />}
                                />
                                <Route
                                    path="/todos"
                                    element={isAuthenticated ? <TodosPage /> : <Navigate to="/login" replace />}
                                />
                                <Route path="/login" element={isAuthenticated ? <HomePage /> : <LoginPage />} />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </BrowserRouter>
                    </ThemeProvider>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </>
    );
}

export default App;
