import { GetMoviesByGenre } from "../../Services/GetMoviesByGenre"
import { Rail } from "../Rail"

export const ListOfMovies = ({id, name}: {id: number, name: string}) => {
  const { genreMovies } = GetMoviesByGenre(id)

  return (
    <>
      <div >{name}</div>
      <Rail movies={genreMovies} type="horizontal-cards" />
    </>
  )
}