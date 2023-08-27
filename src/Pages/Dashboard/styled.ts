import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeroBackground = styled.div`
  background-image: 
  linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0,
      hsla(0, 0%, 8%, 0.25) 45%,
      hsla(0, 0%, 8%, 0.85) 69%,
      hsla(0, 0%, 8%, 0.99) 84%,
      var(--dark-blue) 98%,
      var(--dark-blue)
    ),
    url("https://wallpapers.com/images/featured/bridgerton-lh7t67sqh4t7gt1n.jpg");
  width: 100vw;
  height: 80vh;
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: 0;
  
  @media (max-width: 1024px) {
    width: 108vw;
    height: 35vh;
    left: -8vw;
  }
  
  @media (max-width: 600px) {
    width: 108vw;
    height: 20vh;
  }
`;

export const HeroIcon = styled.div`
  background-image: url('https://static.standard.co.uk/2022/03/08/12/Final-Logo-Bridgerton.png');
  width: 50%;
  height: 30%;
  background-size: cover;
  background-position: center;
  position: relative;
  top: 25vh;
  left: -5vw;

  @media (max-width: 1024px) {
    left: 2vw;
    top: 13vh;
  }
  
  @media (max-width: 600px) {
    height: 8vh;
    top: 5vh;
  }
`
export const DashboardButtonContainer = styled.div`
  position: absolute;
  top: 50vh;
  left: 8vw;
  display: flex;
  gap: 0.5vw;
  
  @media (max-width: 1024px) {
    top: 25vh;
    left: 13vw;

    >button >svg {
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 600px) {
    top: 14vh;
    left: 12vw;

    >button >svg {
      width: 8px;
      height: 8px;
    }
  }
`