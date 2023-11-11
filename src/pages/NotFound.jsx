// Imports de componentes
import { Container, Typography, Box } from '@mui/material';

function NotFoundPage() {
  return (
    <>
      <Container maxWidth="xl">

        <Box my={4} textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            404 - Página no encontrada
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Lo sentimos, la página que estás buscando no existe.
          </Typography>
        </Box>

      </Container>
    </>
  )
}

export default NotFoundPage;
