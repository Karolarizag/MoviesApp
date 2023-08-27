import data from "../../Data/data.json";
import { useState } from "react";
import { UserSelector } from "../../Components/UserSelector";
import { DashboardContainer } from "../../Components/Containers";
import { Hero } from "./Hero/Hero";

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

  return showSelectUser ? (
    RenderUserSelector()
  ) : (
    <DashboardContainer>
      <Hero />
    </DashboardContainer>
  );
};
