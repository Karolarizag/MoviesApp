import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const VarticalCardHoveredContainer = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  display: flex;
  background-color: var(--dark);
  -webkit-box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.93);
  -moz-box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.93);
  box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.93);
  top: -40px;  
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  animation: ${fadeIn}  0.5s ease-in-out forwards;
`;

export const ImageStyled = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  width: 175px;
  position: relative;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
  gap: 15px;
`;