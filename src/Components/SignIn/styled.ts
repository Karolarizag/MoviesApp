import styled from "styled-components"

export const StyledInputContainer = styled.div<{center?:boolean}>`
  max-width: 595px;
  display: flex;
  padding: 10px 57px;
  flex-wrap: wrap;
  gap: 10px;
  margin: ${({center}) => center && "0 auto"};

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
