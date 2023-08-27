import styled from "styled-components";

export const FaqContainer = styled.div`
  margin-bottom: 10px;
  color: var(--white);

`

export const FaqTitle = styled.div`
  padding: 20px 32px;
  background-color: var(--dark-grey);
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;

  :hover {
    background-color: var(--light-grey);
  }
`

export const FaqText = styled.div`
  background-color: var(--dark-grey);
  padding: 20px 32px;
  transition: 1s;
`