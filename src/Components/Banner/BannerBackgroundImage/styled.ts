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
    url(https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/8ec28ec6-0452-4c44-93fe-5bb93f423eaf/ES-es-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 580px;
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

export const StyledInputContainer = styled.div`
  max-width: 595px;
  display: flex;
  padding: 10px 57px;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 600px) {
    padding: 0;
    display: flex;
    justify-content: center;

    >button {
      font-size: 20px;
      padding: 12px 15px;
      margin-top: 5px;
    }
  }
`

export const StyledInput = styled.input`
  width: 335px;
  height: 51.71px;
  border-radius: 0.3rem;
  border: 2px solid var(--white-opacity-3);
  background-color: var(--black-opacity-6);
  color: var(--white);
  font-size: 24px;
  padding: 5px 20px;

  @media (max-width: 600px) {
    width: 300px;
    height: 40px;
  }
`
