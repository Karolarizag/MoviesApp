import styled from "styled-components";



export const HeroBackground = styled.div<{ img: string }>`
  position: relative !important;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0,
      hsla(0, 0%, 8%, 0.25) 45%,
      hsla(0, 0%, 8%, 0.85) 69%,
      hsla(0, 0%, 8%, 0.99) 84%,
      var(--dark) 98%,
      var(--dark)
    ),
    url(${({ img }) => img});
  height: 75vh;
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: 0;

  @media (max-width: 1024px) {
    width: 108vw;
    height: 55vh;
    left: -8vw;
  }

  @media (max-width: 600px) {
    width: 108vw;
    height: 45vh;
  }
`;

export const HeroIcon = styled.div`
  background-image: url("https://static.standard.co.uk/2022/03/08/12/Final-Logo-Bridgerton.png");
  width: 50%;
  height: 30%;
  background-size: cover;
  background-position: center;
  position: relative;
  top: 25vh;
  left: -5vw;

  @media (max-width: 1024px) {
    left: 2vw;
    top: 25vh;
  }

  @media (max-width: 600px) {
    height: 8vh;
  }
`;



export const HeroButtonContainer = styled.div`
  position: absolute;
  top: 54vh;
  left: 8vw;
  display: flex;
  gap: 0.5vw;

  @media (max-width: 1024px) {
    top: 42vh;
    top: 42vh;
    left: 13vw;

    > button > svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 600px) {
    top: 35vh;
    left: 12vw;

    > button > svg {
      width: 8px;
      height: 8px;
    }
  }
`;