import styled from "styled-components";
import { iconProps } from "./Icon";

export const IconContainer = styled.div<iconProps>`
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  height: ${({ heightContainer }) => heightContainer};
  width: ${({ widthContainer }) => widthContainer};
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
  display: flex;
  gap: 10px;
  
  >svg {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    
  }
`;
