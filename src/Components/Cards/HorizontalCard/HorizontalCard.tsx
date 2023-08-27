import { MovieType } from "../../../Utils/types"
import { BackdropImage, HorizontalCardContainer } from "./styled"

export const HorizontalCard = ({movie}: {movie:MovieType}) => {

  const img = `${process.env.REACT_APP_API_IMG}${movie.backdrop_path}`

  return <HorizontalCardContainer>
    <BackdropImage  img={img} />

  </HorizontalCardContainer>
}