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
    width: 80%;
    height: 40%;
    left: 0;
  }
  
  @media (max-width: 600px) {
    width: 300px;
    height: 120px;
    top: 50%;
  }
`
