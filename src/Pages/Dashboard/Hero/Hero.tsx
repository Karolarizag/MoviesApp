import { Button } from "../../../Components/Button"
import { DashboardButtonContainer, HeroBackground, HeroIcon } from "../styled"
import { MoreInfoIcon, PlayDarkIcon } from "../../../Utils/Icons"

export const Hero = () => {
  return <HeroBackground>
        <HeroIcon />
        <DashboardButtonContainer>
          <Button code="primary"> {PlayDarkIcon} Reproducir</Button>
          <Button code="blured"> {MoreInfoIcon} Más información</Button>
        </DashboardButtonContainer>
      </HeroBackground>
}