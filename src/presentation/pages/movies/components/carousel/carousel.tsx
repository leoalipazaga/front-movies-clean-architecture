import Carousel from 'react-material-ui-carousel'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import XepCard from '../card/card';

export default function XepCarousel(props: any) {
  const rows = split(props.movies);

  return (
    <>
      <Typography variant="h6">
        {props.title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {props.subtitle}
      </Typography>
      <Carousel indicators={false} autoPlay={false} navButtonsAlwaysVisible={true} >
        {rows.map((movies, i) => (
          <Box sx={{ width: '100%' }} key={i}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {movies.map((movie: any) => (
              <Grid key={movie.id} item xs={2}>
                <XepCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.releaseDate}
                  poster={movie.poster}
                  description={movie.description}
                  isFavorite={movie.isFavorite}
                  category={movie.category}
                />
            </Grid>
            ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </>
  )
}

function split(rows: any[]): any[] {
  const newArr = [];
  const copyRows = [...rows];
  
  while(copyRows.length) {
    const elementsRemoved = copyRows.splice(0, 6);
    newArr.push(elementsRemoved);
  }

  return newArr;
}