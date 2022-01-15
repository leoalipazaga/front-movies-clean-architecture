import Grid from '@mui/material/Grid';

import { XepCarousel, XepHero } from './components';
import { useMoviesViewController } from './controller';

export default function Movies() {
  const { favoritesMovies, upcomingMovies, popularMovies, topRatedMovies, img } = useMoviesViewController();

  return (
    <>
      <XepHero src={img}></XepHero>
      <main style={{ padding: "150px 10%" }}>
        <Grid container rowSpacing={5}>
          { !!favoritesMovies.length &&
            <Grid item xs={12}>
              <XepCarousel movies={favoritesMovies} title="Favoritos" subtitle="Nullam sapien arcu tempor" />
            </Grid>
          }
          <Grid item xs={12}>
            <XepCarousel movies={popularMovies} title="Más populares" subtitle="Nullam sapien arcu tempor" />
          </Grid>
          <Grid item xs={12}>
            <XepCarousel movies={topRatedMovies} title="Mejor evaluadas" subtitle="Phasellus mi urna euismod" />
          </Grid>
          <Grid item xs={12}>
            <XepCarousel movies={upcomingMovies} title="Proximos eventos" subtitle="Morbi ac turpis lacus" />
          </Grid>
        </Grid>
      </main>
    </>
  );
}