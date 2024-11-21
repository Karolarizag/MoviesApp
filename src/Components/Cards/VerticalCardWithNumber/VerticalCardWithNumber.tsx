import { useState } from "react";
import { MovieType } from "../../../Utils/types";
import {
  ImageStyled,
  NumberStyled,
  VerticalWithNumberContainer,
} from "./styled";
import { VerticalCardHovered } from "./VerticalCardHovered";

export const VerticalCardWithNumber = ({
  movie,
  id,
}: {
  movie: MovieType;
  id: number;
}) => {
  const [isHover, setIsHover] = useState(false);

  const showHover = () => setIsHover(true)
  const hideHover = () => setIsHover(false);

  return (
    <VerticalWithNumberContainer onMouseEnter={showHover} onMouseLeave={hideHover}>
      <NumberStyled>{id + 1}</NumberStyled>
      <ImageStyled img={movie.poster_path} />
      
      {isHover && <VerticalCardHovered movie={movie} />}
    </VerticalWithNumberContainer>
  );
};
