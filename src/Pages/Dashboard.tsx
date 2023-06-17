import data from "../Data/data.json";
import { useState } from "react";
import { UserSelector } from "../Components/UserSelector";
import { DashboardContainer } from "../Components/Containers";

export const Dashboard = () => {
  const [showSelectUser, setShowSelectUser] = useState(true);
  const { dashboard } = data;

  const UserSelectorHandler = () => setShowSelectUser(false);

  return showSelectUser ? (
    <UserSelector
      UserCards={dashboard.userCard}
      EventHandler={UserSelectorHandler}
    />
  ) : (
    <DashboardContainer>
      <p>Home page</p>
    </DashboardContainer>
  );
};
