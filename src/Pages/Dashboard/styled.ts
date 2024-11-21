import styled from "styled-components";

export const DashboardContainer = styled.div`
  overflow: hidden;
`;

export const RailsContainer = styled.div`
  margin-top: -8vh;
  z-index: 1;

  @media (max-width: 1024px) {
    margin-top: -4vh;
  }

  @media (max-width: 600px) {
    margin-top: -2vh;
  }
`;
