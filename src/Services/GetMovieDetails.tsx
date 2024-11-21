import { useState, useEffect, useMemo } from "react";

interface Movie {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: any,
  budget: number,
  genres: any,
  homepage: string,
  id: number,
  imdb_id: string,
  origin_country: string[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: any,
  production_countries: any,
  release_date: string,
  revenue: number,  
  runtime: number,
  spoken_languages: any,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export const useMovieDetails = (id: number) => {
  const [movie, setMovie] = useState<Movie | null | any>(null); // any just in case the API decides to add new fields and it doesn't break
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_MOVIE_URL = useMemo(
    () => `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    [id]
  );

  const API_MOVIE_REVIEW = useMemo(
    () => `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    [id]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesRequest = await fetch(API_MOVIE_URL);
        let moviesResponse = await moviesRequest.json();
        moviesResponse.backdrop_path = `${process.env.REACT_APP_API_IMG}${moviesResponse.backdrop_path}`
        moviesResponse.poster_path = `${process.env.REACT_APP_API_IMG}${moviesResponse.poster_path}`
        setMovie(moviesResponse);

        const reviewsRequest = await fetch(API_MOVIE_REVIEW);
        const reviewsResponse = await reviewsRequest.json();
        setReviews(reviewsResponse.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [API_MOVIE_URL, API_MOVIE_REVIEW, id]);

  return { movie, reviews, loading };
};
