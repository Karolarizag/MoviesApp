import styled from 'styled-components'

export const MovieInfoContainer = styled.div`
  position: absolute;
  top: 15vw;
  left: 5vw;
  gap: 1vw;

  @media (max-width: 1024px) {
    top: 25vw;
  }
`

export const MoviePoster = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center center;
  width: 200px;
  height: 300px;
`

export const MovieTitle = styled.p`
  font-family: var(--secondary);
  font-size: 5vw;
  margin: 0;
  line-height: 5vw;
`