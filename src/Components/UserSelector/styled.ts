import styled from "styled-components";

export const UserSelectorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserSelectorTitle = styled.h1`
  font-size: 3.5vw;
`;

export const UserSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3vw;
`;

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13vw;
  min-width: 84px;
  height: 20vw;
  cursor: pointer;

  &:hover {
    >div {
      border: 5px solid var(--white);
      transition: 0.3s;
    }
  } 
`;

export const UserCardImg = styled.div<{ img: string }>`
  width: 13vw;
  min-width: 84px;
  height: 13vw;
  min-height: 84px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center center;
  border-radius: 0.5em;
`;

export const UserCardName = styled.p`
  font-size: 1.3vw;
  text-align: center;
`;
