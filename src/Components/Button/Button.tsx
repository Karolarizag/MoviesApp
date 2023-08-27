import { ButtonContainer } from "./styled";

export type buttonProps = {
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  bottom?: string;
  children?: any;
  code?: string;
  color?: string;
  cursor?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  left?: string;
  padding?: string;
  position?: string;
  right?: string;
  top?: string;
  width?: string;
};

export const Button = ({
  backgroundColor,
  border,
  borderRadius,
  bottom,
  children,
  code,
  color,
  cursor = "pointer",
  fontSize = '1.2vw',
  fontWeight,
  height,
  left,
  padding,
  position,
  right,
  top,
  width,
}: buttonProps) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      bottom={bottom}
      code={code}
      color={color}
      cursor={cursor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      height={height}
      padding={padding}
      left={left}
      position={position}
      right={right}
      top={top}
      width={width}
    >
      {children}
    </ButtonContainer>
  );
};
