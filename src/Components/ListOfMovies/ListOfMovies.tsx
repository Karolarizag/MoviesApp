import { GetMoviesByGenre } from "../../Services/GetMoviesByGenre";
import { Rail } from "../Rail";
import { GenreTitleStyled } from "./styled";

export const ListOfMovies = ({ id, name }: { id: number; name: string }) => {
  const { genreMovies } = GetMoviesByGenre(id);

  return (
    <>
      <GenreTitleStyled>{name}</GenreTitleStyled>
      <Rail movies={genreMovies} type="horizontal-cards" />
    </>
  );
};
