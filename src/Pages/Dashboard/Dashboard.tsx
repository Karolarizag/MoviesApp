import data from "../../Data/data.json";
import { useState } from "react";
import { UserSelector } from "../../Components/UserSelector";
import { DashboardContainer } from "../../Components/Containers";
import { Hero } from "./Hero/Hero";
import { RailsContainer } from "./styled";
import { Rail } from "../../Components/Rail";
import { GetPopularMovies } from "../../Services/GetPopularMovies";
import { GetGenres } from "../../Services/GetGenres";
import { ListOfMovies } from "../../Components/ListOfMovies";
import { GenreTitleStyled } from "../../Components/ListOfMovies/styled";

export const Dashboard = () => {
  const [showSelectUser, setShowSelectUser] = useState(true);
  const { dashboard } = data;

  const UserSelectorHandler = () => setShowSelectUser(false);
  const RenderUserSelector = () => {
    return (
      <UserSelector
        UserCards={dashboard.userCard}
        EventHandler={UserSelectorHandler}
      />
    );
  };

  const { popularMovies } = GetPopularMovies();
  const { genres } = GetGenres();

  return showSelectUser ? (
    RenderUserSelector()
  ) : (
    <DashboardContainer>
      <Hero />
      <RailsContainer>
        {genres.map((genre) => {
          const { id, name } = genre;
          if (id === 12) {
            return (
              <>
              <GenreTitleStyled>Top 10: Global</GenreTitleStyled>
              <Rail
                movies={popularMovies.slice(0, 10)}
                type="vertical-cards"
                key={id}
                />
                </>
            );
          }
          return <ListOfMovies id={id} name={name} key={id} />;
        })}
      </RailsContainer>
    </DashboardContainer>
  );
};
