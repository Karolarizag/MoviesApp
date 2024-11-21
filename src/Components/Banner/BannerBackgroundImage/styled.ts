import styled from 'styled-components'

export const StyledBannerBackgroundImageContainer = styled.div`
  background-image: linear-gradient(
      65.68deg,
      rgba(0, 8, 29, 0.6) 9.51%,
      rgba(53, 13, 49, 0.6) 72.89%,
      rgba(132, 5, 25, 0.6) 101.01%
    ),
    linear-gradient(
      102.21deg,
      rgba(0, 0, 0, 0.04) 16.09%,
      rgba(1, 1, 1, 0.17) 39.27%,
      rgba(1, 1, 1, 0.24) 64.25%,
      rgba(4, 4, 4, 0.8) 96.63%
    ),
    url('/mainscreen.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 60px 0;

  @media (max-width: 600px) {
    height: 450px;
  }
`

export const StyledTitle = styled.h1`
  padding: 10px 57px;
  max-width: 595px;
  font-size: 3rem;
  font-weight: var(--bold);
  color: var(--white);
  margin: 0;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 0 10px;
    text-align: center;
  }
`

export const StyledText = styled.p<{ bold: boolean }>`
  padding: 10px 57px;
  max-width: 595px;
  font-size: 1.25rem;
  font-weight: ${({ bold }) => (bold ? 'var(--bold)' : 'var(--regular)')};
  margin: 0;
  color: var(--white);

  @media (max-width: 600px) {
    margin-bottom: 10px;
    font-size: 1rem;
    padding: 0 20px;
    text-align: center;
  }
`

