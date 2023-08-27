import data from "../../Data/data.json";
import { useState } from "react";
import { UserSelector } from "../../Components/UserSelector";
import { DashboardContainer } from "../../Components/Containers";
import { Hero } from "./Hero/Hero";
import { RailsContainer } from "./styled";
import { Rail } from "../../Components/Rail";
import { GetPopularMovies } from "../../Services/GetPopularMovies";

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

  const {popularMovies} = GetPopularMovies()

  return showSelectUser ? (
    RenderUserSelector()
  ) : (
    <DashboardContainer>
      <Hero />
      <RailsContainer>
        <Rail movies={popularMovies} />
        <Rail movies={popularMovies} />
        <Rail movies={popularMovies} />
        <Rail movies={popularMovies} />
        <Rail movies={popularMovies} />
      </RailsContainer>
    </DashboardContainer>
  );
};
