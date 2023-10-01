import { useState } from "react";
import { MovieType } from "../../../Utils/types";
import { BackdropImage, HorizontalCardContainer } from "./styled";
import { HorizontalCardHovered } from "./HorizontalCardHovered";

export const HorizontalCard = ({ movie }: { movie: MovieType }) => {
  const [isHover, setIsHover] = useState(false);

  const img = `${process.env.REACT_APP_API_IMG}${movie.backdrop_path}`;
  const showHover = () => setIsHover(true);
  const hideHover = () => setIsHover(false);

  return (
    <HorizontalCardContainer onMouseEnter={showHover} onMouseLeave={hideHover}>
      <BackdropImage img={img} />
      {isHover && <HorizontalCardHovered movie={movie} />}
    </HorizontalCardContainer>
  );
};
