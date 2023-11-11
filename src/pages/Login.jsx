// Imports de React y React Router
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

// Imports de componentes
import SignIn from "../components/SignIn";
import { AuthContext } from "../components/Contexts";

function LoginPage() {
  // Utilizar el contexto de autenticación para obtener el estado y el método de autenticación
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  // Estado local para manejar errores y redirecciones
  const [error, setError] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = (username, password) => {
    // Validar las credenciales del usuario
    if (username === "usuario" && password === "demo") {
      // Establecer el usuario como autenticado
      setIsAuthenticated(true);
      // Guardar el estado de autenticación en la sesión
      sessionStorage.setItem("isAuthenticated", "true");
      // Establecer la redirección a la página de tareas
      setShouldRedirect(true);
    } else {
      // Establecer un mensaje de error si las credenciales son inválidas
      setError("Invalid username or password");
    }
  };

  return (
    <>
      {/* Si el usuario debe ser redirigido, navegar a la página de tareas */}
      {shouldRedirect ? <Navigate to="/todos" /> : null}
      
      {/* Componente de inicio de sesión */}
      <SignIn handleLogin={handleLogin} error={error} />
    </>
  );
}

export default LoginPage;
