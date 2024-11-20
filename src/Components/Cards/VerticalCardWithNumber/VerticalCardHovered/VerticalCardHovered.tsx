import {
  ChevronDownIcon,
  PlayCircleIcon,
  PlusIcon,
} from "../../../../Utils/Icons";
import { MovieType } from "../../../../Utils/types";
import { Icon } from "../../../Icon";
import {
  CardContent,
  VarticalCardHoveredContainer,
  ImageStyled,
} from "./styled";

export const VerticalCardHovered = ({ movie }: { movie: MovieType }) => {
  const img = `${process.env.REACT_APP_API_IMG}${movie.poster_path}`;

  return (
    <VarticalCardHoveredContainer>
      <ImageStyled img={img}>
      </ImageStyled>
      <CardContent>
            <Icon
              icon={PlayCircleIcon}
              heightContainer="42px"
              widthContainer="39px"
              height="42px"
              width="39px"
            />
            <Icon
              icon={PlusIcon}
              heightContainer="42px"
              widthContainer="39px"
              height="20px"
              width="20px"
              border="1px solid var(--white)"
              borderRadius="100px"
            />
            <Icon
              icon={ChevronDownIcon}
              heightContainer="42px"
              widthContainer="39px"
              height="20px"
              width="20px"
              border="1px solid var(--white)"
              borderRadius="100px"
            />
      </CardContent>
    </VarticalCardHoveredContainer>
  );
};
