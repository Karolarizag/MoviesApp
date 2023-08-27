import styled from "styled-components";

export const HorizontalCardContainer = styled.div`
  width: 240px;
  height: 135px;
  margin-right: 0.4vw;
  border-radius: 3px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 234px;
    height: 131px;
  }

  @media (max-width: 1024px) {
    width: 188px;
    height: 106px;
  }
`;

export const BackdropImage = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 240px;
  height: 135px;
`;
