import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';


import { fetchMovies } from "./store";
import { XepCarousel, XepHero } from './components';
import img from '../../../assets/img/hero.png'

export default function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMoviesThunk = fetchMovies();
    dispatch(fetchMoviesThunk);
  }, [dispatch]);

  const favoritesMovies = useSelector((state: any) => state.movies.favorites);
  const upcomingMovies = useSelector((state: any) => state.movies.upcoming);
  const popularMovies = useSelector((state: any) => state.movies.popular);
  const topRatedMovies = useSelector((state: any) => state.movies.top_rated);

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