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
  const img = `${process.env.REACT_APP_API_IMG}${movie.poster_path}`;
  const [isHover, setIsHover] = useState(false);
  
  const showHover = () => {setIsHover(true)};
  const hideHover = () => setIsHover(false);

  return (
    <VerticalWithNumberContainer onMouseEnter={showHover} onMouseLeave={hideHover}>
      <NumberStyled>{id + 1}</NumberStyled>
      <ImageStyled img={img} />
      
      {isHover && <VerticalCardHovered movie={movie} />}
    </VerticalWithNumberContainer>
  );
};
