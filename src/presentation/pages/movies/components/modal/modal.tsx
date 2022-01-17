import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function XepModal(props: any) {
  const movie = props.movie;
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function handleOnAddToFavorites() {
    props.handleFavorite();
  }

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src={movie.poster} width="100%" height="532px" alt={movie.title} />
          </Grid>
          <Grid item xs={6}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {movie.title}
            </Typography>
            <Button variant="text" onClick={handleOnAddToFavorites}>{movie.isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}</Button>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} color="text.secondary" variant="body2">
              {movie.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}