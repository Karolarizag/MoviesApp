import { useState } from "react";
import { MovieType } from "../../../Utils/types";
import { BackdropImage, HorizontalCardContainer } from "./styled";
import { HorizontalCardHovered } from "./HorizontalCardHovered";

export const HorizontalCard = ({ movie }: { movie: MovieType }) => {
  const [isHover, setIsHover] = useState(false);

  const showHover = () => setIsHover(true);
  const hideHover = () => setIsHover(false);

  return (
    <HorizontalCardContainer onMouseEnter={showHover} onMouseLeave={hideHover}>
      <BackdropImage img={movie.backdrop_path} />
      {isHover && <HorizontalCardHovered movie={movie} />}
    </HorizontalCardContainer>
  );
};
