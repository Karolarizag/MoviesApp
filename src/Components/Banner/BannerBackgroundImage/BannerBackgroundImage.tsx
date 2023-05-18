import { Button } from '../../Button'
import {
  StyledBannerBackgroundImageContainer,
  StyledInput,
  StyledInputContainer,
  StyledText,
  StyledTitle,
} from './styled'

export const BannerBackgroundImage = () => {
  return (
    <StyledBannerBackgroundImageContainer>
      <StyledTitle>Series, películas y más... ilimitadas</StyledTitle>
      <StyledText bold={true}>Disfruta donde quieras. Cancela cuando quieras.</StyledText>
      <StyledText bold={false}>
        ¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.
      </StyledText>
      <StyledInputContainer>
        <StyledInput placeholder="Dirección de correo" />
        <Button
          backgroundColor="var(--red) "
          padding="12px 24px"
          borderRadius="0.20rem"
          color="var(--white) "
          border="none"
          fontWeight="var(--bold)"
          fontSize="24px"
        >
          Empezar {'>'}
        </Button>
      </StyledInputContainer>
    </StyledBannerBackgroundImageContainer>
  )
}
