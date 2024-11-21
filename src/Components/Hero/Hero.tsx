import { Button } from "../Button"
import { MoreInfoIcon, PlayDarkIcon } from "../../Utils/Icons"
import { HeroBackground, HeroButtonContainer, HeroIcon } from "./styled"

export const HeroComponent = ({img, complements}:{img:string, complements?: boolean}) => {
  return <HeroBackground img={img}>
    {
      complements && <>
        <HeroIcon />
        <HeroButtonContainer>
          <Button code="primary"> {PlayDarkIcon} Reproducir</Button>
          <Button code="blured"> {MoreInfoIcon} Más información</Button>
        </HeroButtonContainer>
      </>
    }
  </HeroBackground>
}