import styled from "styled-components";

export const HorizontalCardContainer = styled.div`
  width: 240px;
  height: 135px;
  margin-right: 0.9vw;
  border-radius: 3px;
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
  
  @media (max-width: 600px) {
    width: 156px;
    height: 106px;
    margin-right: 1.5vw;
  }
`;

export const BackdropImage = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 240px;
  height: 135px;
  
  @media (max-width: 600px) {
    width: 156px;
    height: 106px;
  }
`;
