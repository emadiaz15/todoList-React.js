// Imports de componentes
import NavBar from "../components/NavBar";
import { Container, Typography, Box, Paper, Grid, TextField, Button } from '@mui/material';

function ContactPage() {
  return (
    <>
      {/* Componente de la barra de navegación */}
      <NavBar />

      {/* Contenedor principal */}
      <Container maxWidth="xl">

        <Box my={4} textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            Contáctanos
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            ¿Tienes alguna pregunta o comentario? ¡Nos encantaría escucharlo!
          </Typography>
        </Box>

        <Box my={4}>
          <Paper elevation={3} style={{ padding: '32px' }}>
            <Typography variant="h6" gutterBottom>
              Formulario de Contacto
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField 
                  fullWidth 
                  label="Nombre" 
                  variant="outlined" 
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  fullWidth 
                  label="Correo Electrónico" 
                  variant="outlined" 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  label="Mensaje" 
                  variant="outlined" 
                  multiline 
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>

      </Container>
    </>
  )
}

export default ContactPage;
