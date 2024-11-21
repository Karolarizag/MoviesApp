import { useNavigate } from "react-router";
import { GetMovieGenres } from "../../../../Services/GetMovieGenres";
import {
  ChevronDownIcon,
  HandThumbsUpIcon,
  PlayCircleIcon,
  PlusIcon,
} from "../../../../Utils/Icons";
import { GenreType, MovieType } from "../../../../Utils/types";
import { Icon } from "../../../Icon";
import {
  HorizontalCardHoveredContainer,
  Container,
  ImageStyled,
  Separator,
  Text,
  CardContent,
  Title,
} from "./styled";

export const HorizontalCardHovered = ({ movie }: { movie: MovieType }) => {
  const navigate = useNavigate()
  const { movieGenres } = GetMovieGenres(movie.genre_ids.slice(0,3));

  return (
    <HorizontalCardHoveredContainer>
      <ImageStyled img={movie.backdrop_path}>
        <Title>{movie.title}</Title>
      </ImageStyled>
      <CardContent>
        <Container flex="space-between">
          <Separator>
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
              icon={HandThumbsUpIcon}
              heightContainer="42px"
              widthContainer="39px"
              height="20px"
              width="20px"
              border="1px solid var(--white)"
              borderRadius="100px"
            />
          </Separator>
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
        </Container>
        <Text fontColor="var(--green)" fontWeight="var(--semiBold)">
          {Math.round(movie.vote_average) } % de coincidencia
        </Text>
        <Container flex="">
          {movieGenres.map((genre: GenreType, idx: number) => {
            return <Text key={idx}> {genre.name}</Text>;
          })}
        </Container>
      </CardContent>
    </HorizontalCardHoveredContainer>
  );
};
