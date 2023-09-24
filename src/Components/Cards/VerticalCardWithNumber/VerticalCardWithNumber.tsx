import { MovieType } from "../../../Utils/types";
import { ImageStyled, NumberStyled, VerticalWithNumberContainer } from "./styled";

export const VerticalCardWithNumber = ({
  movie,
  id,
}: {
  movie: MovieType;
  id: number;
}) => {
  const img = `${process.env.REACT_APP_API_IMG}${movie.poster_path}`;

  return (
    <VerticalWithNumberContainer>
      <NumberStyled>{id + 1}</NumberStyled>
      <ImageStyled img={img} />
    </VerticalWithNumberContainer>
  );
};
