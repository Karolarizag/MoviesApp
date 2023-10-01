import { GenreType } from "../Utils/types";
import { GetGenres } from "./GetGenres"

export const GetMovieGenres = (ids: number[]) => {
  const {genres} = GetGenres()
  const movieGenres = genres.filter((genre:GenreType) => ids.includes(genre.id))
  return {movieGenres}
}