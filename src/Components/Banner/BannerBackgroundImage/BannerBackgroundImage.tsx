import { SignIn } from '../../SignIn'
import {
  StyledBannerBackgroundImageContainer,
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
      <SignIn />
    </StyledBannerBackgroundImageContainer>
  )
}
