import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { XepButton } from '../../components';
import { XepAlert } from '../../../presentation/components';
import { authenticate } from '../../../domain/usecases';
import { signinFlow } from './store';

export default function Signin() {
  const theme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.user.isAuthenticated);
  const error = useSelector((state: any) => state.user.error);
  const [form, setFormState] = useState({
    email: '',
    password: ''
  });
  
  useEffect(() => {
    if(isAuth) {
      navigate('/', { replace: false });
    }
  }, [isAuth, navigate]);

  function goToSignup() {
    navigate('/signup');
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const signin = signinFlow(() => authenticate(form));
    dispatch(signin);
  }

  function handleInput(e: any) {
    const name = e.target.name;
    const value = e.target.value;

    setFormState({...form, [name]: value});
  }
  return (<ThemeProvider theme={theme}>
    {error && <XepAlert type={'error'} message={error.errorMessage} />}
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
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