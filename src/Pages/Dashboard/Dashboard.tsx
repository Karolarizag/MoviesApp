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

  const {popularMovies } = GetPopularMovies()
  const {genres} = GetGenres()

  return showSelectUser ? (
    RenderUserSelector()
  ) : (
    <DashboardContainer>
      <Hero />
      <RailsContainer>
        <Rail movies={popularMovies.slice(0,9)} type="vertical-cards" />
        {
          genres.map((genre) => {
            const {id, name} = genre
            return <ListOfMovies id={id} name={name}  />
          })
        }
      </RailsContainer>
    </DashboardContainer>
  );
};
