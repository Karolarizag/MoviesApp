import { Button } from '../Button'
import { StyledHeaderContainer, StyledHeaderImage } from './styled'

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderImage src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
      <Button
        backgroundColor="var(--red) "
        padding="10px 20px"
        borderRadius="0.20rem"
        color="white "
        border="none"
        fontWeight="var(--bold)"
      >
        Iniciar sesión
      </Button>
    </StyledHeaderContainer>
  )
}
