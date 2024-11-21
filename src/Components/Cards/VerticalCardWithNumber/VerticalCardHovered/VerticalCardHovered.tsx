import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  return (
    <VarticalCardHoveredContainer>
      <ImageStyled img={movie.poster_path}>
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
            
            <div onClick={() => navigate(`/movieDetail/${movie.id}`)}>
              <Icon
                icon={ChevronDownIcon}
                heightContainer="42px"
                widthContainer="39px"
                height="20px"
                width="20px"
                border="1px solid var(--white)"
                borderRadius="100px"
              />
            </div>
      </CardContent>
    </VarticalCardHoveredContainer>
  );
};
