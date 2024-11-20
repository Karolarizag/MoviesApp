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

export const HorizontalCardHoveredContainer = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  background-color: var(--dark);
  -webkit-box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.93);
  -moz-box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.93);
  box-shadow: 0px 0px 28px -5px rgba(0, 0, 0, 0.93);
  top: -150px;  
  animation: ${fadeIn} 0.5s ease-in-out forwards;

`;

export const ImageStyled = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 185px;
  width: 100%;
  position: relative;
`;

export const Title = styled.p`
  margin: 0;
  padding: 10px;
  background-color: var(--black-opacity-6);
  font-weight: var(--bold);
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px;
  gap: 15px;
`;

export const Container = styled.div<{ flex: string }>`
  display: flex;
  justify-content: ${({ flex }) => flex};
  gap: 10px;
`;

export const Separator = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled.p<{ fontWeight?: string; fontColor?: string }>`
  font-size: 14px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor }) => fontColor};
  margin: 0;
`;
