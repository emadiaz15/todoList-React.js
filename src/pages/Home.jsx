// Imports de componentes
import NavBar from "../components/NavBar";
import { Container, Typography, Button, Box, Paper, Grid } from '@mui/material';

function HomePage() {
  return (
    <>
      {/* Componente de la barra de navegación */}
      <NavBar />

      {/* Contenedor principal */}
      <Container maxWidth="xl">

        <Box my={4} textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            Bienvenido a Todo-List
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Una aplicación para gestionar tus tareas diarias.
          </Typography>

          <Box mt={4}>
            <Button variant="contained" color="primary" size="large">
              Comenzar
            </Button>
          </Box>
        </Box>

        <Box my={4}>
          <Grid container spacing={4}>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" gutterBottom>
                  Organiza tu día
                </Typography>
                <Typography>
                  Planifica y organiza tus tareas diarias para ser más productivo.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" gutterBottom>
                  Establece Prioridades
                </Typography>
                <Typography>
                  Establece prioridades para tus tareas y céntrate en lo que realmente importa.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" gutterBottom>
                  Sigue tu progreso
                </Typography>
                <Typography>
                  Haz un seguimiento de tus tareas completadas y visualiza tu progreso.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default HomePage;
