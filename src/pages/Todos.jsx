// Imports de componentes
import NavBar from "../components/NavBar";
import TodosList from "../components/TodosList";

// Imports de MUI
import { Container } from '@mui/material';

function TodosPage() {
  return (
    <>
      {/* Componente de la barra de navegación */}
      <NavBar />
      
      {/* Contenedor principal */}
      <Container maxWidth="xl">
        {/* Componente que muestra la lista de tareas */}
        <TodosList />
      </Container>
    </>
  );
}

export default TodosPage;
