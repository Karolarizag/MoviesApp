import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
  };
  to {
    opacity: 1;
  }
`

export const FaqContainer = styled.div`
  width: 75%;
  margin: auto auto;
  color: var(--white);
  padding-bottom: 10px;
  `

export const FaqTitle = styled.div`
  padding: 20px 32px;
  background-color: var(--dark-grey);
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  
  :hover {
    background-color: var(--light-grey);
    transition: all 0.5s ease-in-out;
  }
  `

export const FaqText = styled.div`
  border-radius: 10px;
  background-color: var(--dark-grey);
  padding: 20px 32px;
  animation: ${animation} 0.5s ease-in-out forwards;
  transition: padding 0.5s ease-in-out;
  `