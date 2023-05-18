import { BannerBackgroundImage } from '../Components/Banner/BannerBackgroundImage'
import { HomePageContainer } from '../Components/Containers'
import { Header } from '../Components/Header'

export const Home = () => {
  return (
    <HomePageContainer>
      <Header />
      <BannerBackgroundImage />
    </HomePageContainer>
  )
}
