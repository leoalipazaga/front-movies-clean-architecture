import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { useState } from 'react';

import { XepButton } from '../../components';
import { addAccount } from '../../../domain/usecases';


export default function Signup() {
  const theme = createTheme();
  const navigate = useNavigate();
  const [form, setFormState] = useState({
    email: '',
    username: '',
    password: ''
  });

  function goToSignin() {
    navigate('/signin');
  }

  function handleInput(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setFormState({...form, [name]: value});
  }


  function handleSubmit(e: any) {
    e.preventDefault();
    addAccount(form);
  }
  return (<ThemeProvider theme={theme}>
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
          Regístrate
        </Typography>
        <Typography component="h1" variant="subtitle1">
          ¡Disfruta de una experiencia personalizada!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de usuario"
            name="username"
            autoComplete="username"
            autoFocus
            value={form.username}
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleInput}
          />
          <XepButton fullWidth sx={{ mt: 3, mb: 2 }} type="submit">
            Registrarse
          </XepButton>
          <Grid container>
            <Grid item>
              <Typography variant="body2">
                ¿Ya tienes cuenta? 
                <Button onClick={goToSignin}>
                  Inicia sesión
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>);
}