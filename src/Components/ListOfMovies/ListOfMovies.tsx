import { GetMoviesByGenre } from "../../Services/GetMoviesByGenre";
import { GetPopularMovies } from "../../Services/GetPopularMovies";
import { Rail } from "../Rail";
import { GenreTitleStyled } from "./styled";

export const ListOfMovies = ({ id, name }: { id: number; name: string }) => {
  const { genreMovies } = GetMoviesByGenre(id);
  const { popularMovies } = GetPopularMovies();

  return (
    <>
      <GenreTitleStyled>{id === 12 ? 'Top 10: Global' : name}</GenreTitleStyled>
      <Rail 
        movies={id === 12 ? popularMovies.slice(0, 10) : genreMovies} 
        type={id !== 12 ? "horizontal-cards" : "vertical-cards"} 
      />
    </>
  );
};
