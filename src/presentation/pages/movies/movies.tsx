import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import { XepCarousel, XepHero } from './components';
import { BASE_IMG_URL } from '../../../main/constants';
import { useMovies } from './hooks';

export default function Movies() {
  const movies = useMovies();
  const favoritesMovies = useSelector((state: any) => state.movies.favorites);

  return (
    <>
      <XepHero src={`${BASE_IMG_URL}iTyh3hqTUjiRqQo8Uz1w1KtQti9.jpg`}></XepHero>
      <main style={{ padding: "150px 10%" }}>
        <Grid container rowSpacing={5}>
          { !!favoritesMovies.length &&
            <Grid item xs={12}>
              <XepCarousel movies={favoritesMovies} title="Favoritos" subtitle="Nullam sapien arcu tempor" />
            </Grid>
          }
          <Grid item xs={12}>
            <XepCarousel movies={movies.popular} title="Más populares" subtitle="Nullam sapien arcu tempor" />
          </Grid>
          <Grid item xs={12}>
            <XepCarousel movies={movies.topRated} title="Mejor evaluadas" subtitle="Phasellus mi urna euismod" />
          </Grid>
          <Grid item xs={12}>
            <XepCarousel movies={movies.upcoming} title="Proximos eventos" subtitle="Morbi ac turpis lacus" />
          </Grid>
        </Grid>
      </main>
    </>
  );
}