import { ButtonContainer } from './styled'

export type buttonProps = {
  color?: string
  height?: string
  width?: string
  padding?: string
  borderRadius?: string
  children?: any
  backgroundColor?: string
  fontWeight?: string
  border?: string
  fontSize?: string
  code?: string
}

export const Button = ({
  color,
  height,
  width,
  padding,
  children,
  borderRadius,
  backgroundColor,
  fontWeight,
  fontSize,
  border,
  code
}: buttonProps) => {
  return (
    <ButtonContainer
      color={color}
      height={height}
      width={width}
      padding={padding}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      fontWeight={fontWeight}
      border={border}
      fontSize={fontSize}
      code={code}
    >
      {children}
    </ButtonContainer>
  )
}
