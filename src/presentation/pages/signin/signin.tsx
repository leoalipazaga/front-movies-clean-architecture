import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { XepButton } from '../../components';
import { useSigninViewController } from './controller';

// import { XepAlert } from '../../../presentation/components';

export default function Signin() {
  const theme = createTheme();
  const { formik, goToSignup } = useSigninViewController();

  return (<ThemeProvider theme={theme}>
    {/* {error && <XepAlert type={'error'} message={error.errorMessage} />} */}
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Inicia Sesión
        </Typography>
        <Typography component="h1" variant="subtitle1">
          ¡Qué bueno tenerte de vuelta!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>
          <TextField
            required
            fullWidth
            margin="normal"
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
          />
          <XepButton fullWidth sx={{ mt: 3, mb: 2 }} type="submit">
            Entrar
          </XepButton>
          <Grid container>
            <Grid item>
              <Typography variant="body2">
                ¿Aún no tienes contraseña?
                <Button onClick={goToSignup}>
                  {"Regístrate"}
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>);
}