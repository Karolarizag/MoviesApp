import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieType } from "../../Utils/types";
import { HorizontalCard } from "../Cards/HorizontalCard";
import { RailContainer } from "./styled";
import { VerticalCardWithNumber } from "../Cards/VerticalCardWithNumber/VerticalCardWithNumber";

export const Rail = ({
  movies,
  type,
}: {
  movies: MovieType[];
  type: string;
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const parseTypeOfCards = (movie: MovieType, idx: number) => {
    switch (type) {
      case "vertical-cards":
        return <VerticalCardWithNumber movie={movie} id={idx} key={movie.id} />;
      default:
        return <HorizontalCard movie={movie} key={movie.id} />;
    }
  };

  return (
    <RailContainer>
      <Carousel
        infinite={true}
        ssr={true}
        draggable={false}
        itemClass="carousel-item-padding-0-px"
        responsive={responsive}
      >
        {movies.map((movie: MovieType, idx: number) => {
          return parseTypeOfCards(movie, idx);
        })}
      </Carousel>
    </RailContainer>
  );
};
