import { IconContainer } from "./styled";

export type iconProps = {
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  cursor?: string;
  fontSize?: string;
  fontWeight?: string;
  heightContainer?: string;
  height?: string;
  icon?: JSX.Element,
  padding?: string;
  widthContainer?: string;
  width?: string;
};

export const Icon = ({
  backgroundColor,
  border,
  borderRadius,
  color,
  cursor = "pointer",
  fontSize = "1.2vw",
  fontWeight,
  heightContainer,
  height,
  icon,
  padding,
  widthContainer,
  width,
}: iconProps) => {
  return (
    <IconContainer
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      color={color}
      cursor={cursor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      heightContainer={heightContainer}
      height={height}
      padding={padding}
      widthContainer={widthContainer}
      width={width}
    >
      {icon}
    </IconContainer>
  );
};
