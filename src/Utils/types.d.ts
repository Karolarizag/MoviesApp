export type FaqType = {
  text: string[]
  title: string
}

export type HomeContentType = {
  id: number
  title: string
  text: string
  img: string
}

export type UsersCardType = {
  id: number
  name: string
  img?: string
  extraField?: string
}

export type MovieType = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string 
  original_title: string 
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}