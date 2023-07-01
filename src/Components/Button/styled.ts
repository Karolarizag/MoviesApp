import styled from 'styled-components'
import { buttonProps } from './Button'

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

  ${({code}) => {
    if (code === "primary") {
      return css`
        background-color: var(--white);
      `
    }
  }}

`
