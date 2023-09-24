import styled, { css } from "styled-components";
import { buttonProps } from "./Button";

export const ButtonContainer = styled.button<buttonProps>`
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ fontSize }) => fontSize};
  cursor: ${({ cursor }) => cursor};
  font-family: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${({position}) => position};
  top: ${({top}) => top};
  right: ${({right}) => right};
  left: ${({left}) => left};
  bottom: ${({bottom}) => bottom};
  display: flex;
  gap: 10px;

  ${({ code }) => {
    if (code === "primary") {
      return css`
        background-color: var(--white);
        border: none;
        border-radius: 4px;
        padding: 0.4vh 1.06vw;
        font-weight: var(--bold);
        `;
    } else if (code === 'blured') {
      return css`
        background-color: var(--white-opacity-6);
        border-radius: 4px;
        border: none;
        color: var(--white);
        font-weight: var(--bold);
        padding: 0.4vh 1.06vw;
        
        :hover {
         background-color: var(--white-opacity-9);
        }
      `
    }
  }}
`;
