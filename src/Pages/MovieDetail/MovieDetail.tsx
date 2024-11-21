import { useParams } from "react-router";
import { useMovieDetails } from "../../Services/GetMovieDetails";
import { HeroComponent } from './../../Components/Hero/Hero';
import { MovieInfoContainer, MoviePoster, MovieTitle } from './styled';

export const MovieDetail = () => {
  const {id} = useParams();
  const {movie} = useMovieDetails(Number(id));

  return <>
    <HeroComponent img={movie?.backdrop_path} />
    <MovieInfoContainer>
      <MoviePoster img={movie?.poster_path} />
      <MovieTitle>{movie?.title}</MovieTitle>
    </MovieInfoContainer>
  </>
}