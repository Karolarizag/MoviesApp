import styled from "styled-components";

export const FaqsContainer = styled.div`
  padding: 0 32px 60px;
  color: var(--white);
  border-bottom: 8px solid var(--dark-grey);

  >p {
    padding: 20px 60px 0;
    text-align: center;

    @media (max-width: 600px) {
      padding: 20px 20px 0;
    }
  }
`

export const FaqsTitle = styled.div`
  font-size: 2rem;
  font-weight: var(--bold);
  text-align: center;
  padding: 50px 0 30px;
`